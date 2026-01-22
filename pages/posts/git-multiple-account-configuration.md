---
title: 配置 Git 多账户指南
date: 2022-07-10
layout: post
---

当开发者同时拥有多个 Git 账户（如个人账户、公司账户）时，若操作时未留意当前账户，会导致提交记录(commit)的所属人混乱，不仅影响提交历史的整洁性，还会增加数据统计、权限管理的复杂度。

本文将通过 Git 多级别配置结合 SSH 公私钥方案，实现多账户的精准区分与自动匹配，彻底解决这一问题。

在 Git 中，配置分为三个层级，优先级依次递增（后者覆盖前者）：

- **系统级别(system)**：对当前系统所有用户生效
- **全局级别(global)**：仅对当前用户所有仓库生效
- **本地级别(local)**：仅对当前所在仓库生效

## 查看各层级配置

通过以下命令可分别查看对应级别的所有配置项：

```sh
$ git config --system --list
$ git config --global --list
$ git config --local --list
```

配置优先级规则：`system` < `global` < `local`，当不同层级存在相同关键字时，优先级高的配置会覆盖优先级低的。

多数教程会直接配置全局级别的 `user.name` 和 `user.email`，这会导致多账户场景下提交归属混乱，因此我们需采用「全局清空 + 仓库本地配置」的方案。

::: warning

若你的 Git 仓库使用 `HTTP(s)` 协议连接，无需配置 SSH 公私钥及相关文件，仅需执行「[重置全局配置](#reset-global-configuration)」和「[项目配置本地账户](#configure-local-account-for-project)」两步即可。

:::

## 重置全局配置 {#reset-global-configuration}

首先清空全局级别的用户名和邮箱配置，避免其覆盖本地仓库配置：

```sh
# 查看全局配置，确认是否存在 user.name 和 user.email
$ git config --global --list

# 若存在，执行以下命令清除（无对应配置则跳过）
$ git config --global --unset user.name
$ git config --global --unset user.email
```

## 生成不同账户的公私钥 {#generate-public-and-private-keys-for-different-accounts}

通过 SSH 公私钥实现不同账户的身份认证，需为每个账户生成独立的密钥对，步骤如下：

1. 打开终端，进入 `.ssh` 目录（默认路径为用户根目录下，Windows 路径：`C:\Users\你的用户名\.ssh`，Mac/Linux 路径：`~/.ssh`）：

```sh
$ cd ~/.ssh
```

2. 为每个账户生成公私钥，以「个人账户」和「公司账户」为例：

  - 个人账户：账户名 `personal`，邮箱 `personal@abc.com`
  - 公司账户：账户名 `company`，邮箱 `company@abc.com`

执行生成命令，关键是**自定义密钥文件名**（避免默认 `id_rsa` 覆盖）：

```sh
# 生成个人账户公私钥
$ ssh-keygen -t rsa -C "personal@abc.com"
# 提示输入密钥保存路径时，输入自定义名称（如 personal），回车确认
Enter file in which to save the key (~/.ssh/id_rsa): personal
# 后续提示设置密码（可选，直接回车跳过），直至密钥生成完成

# 生成公司账户公私钥
$ ssh-keygen -t rsa -C "company@abc.com"
# 输入自定义名称（如 company），回车确认
Enter file in which to save the key (~/.ssh/id_rsa): company
# 跳过密码设置，完成生成
```

3. 生成后，`.ssh` 目录下会新增 4 个文件：`personal`（个人私钥）、`personal.pub`（个人公钥）、`company`（公司私钥）、`company.pub`（公司公钥）。

## 配置远程仓库公私钥 {#configure-public-and-private-keys-for-remote-repository}

将每个账户的公钥配置到对应远程仓库（GitHub、GitLab 等），以实现身份认证：

1. 查看公钥内容（以个人账户为例）：

```sh
# Mac/Linux
$ cat ~/.ssh/personal.pub
# Windows（PowerShell）
$ type ~/.ssh/personal.pub
```

2. 复制输出的公钥内容（完整字符串，包含邮箱后缀）。
3. 登录对应远程仓库，进入「个人设置 → SSH 密钥」页面，粘贴公钥并保存（不同平台操作类似，可查阅对应平台官方教程）。
4. 重复上述步骤，将公司账户的 `company.pub` 配置到公司对应的远程仓库。

## 配置 SSH Config 文件 {#configure-the-ssh-config-file}

在 `.ssh` 目录下新建 `config` 文件（无后缀名），通过配置规则实现不同仓库自动匹配对应账户的密钥，内容如下：

```sh
# 个人账户配置
Host personal-host # 自定义别名（区分大小写，建议全部小写）
HostName github.com # 远程仓库域名（个人仓库所在平台，如 github.com）
IdentityFile ~/.ssh/personal # 个人私钥绝对路径
PreferredAuthentications publickey # 认证方式（优先公钥，可省略）
User personal # 个人账户名（可省略）

# 公司账户配置
Host company-host
HostName gitlab.com # 公司仓库所在平台域名
IdentityFile ~/.ssh/company  # 公司私钥绝对路径
PreferredAuthentications publickey
User company # 公司账户名（可省略）
```

### 配置说明 {#configuration-instructions}

- 每个 `Host` 对应一个账户的配置，别名可自由定义，但会影响后续 Git 命令的仓库地址格式。
- 若个人仓库在 GitHub、公司仓库在 Gitlab，只需修改对应 `HostName` 为 `github.com` 即可。

## 添加私钥到本地 SSH 代理 {#add-private-key-to-local-ssh-proxy}

将生成的私钥添加到本地 SSH 代理，避免每次操作都需重新指定密钥：

```sh
# 切换到 .ssh 目录
$ cd ~/.ssh

# 添加个人私钥
$ ssh-add ./personal

# 添加公司私钥
$ ssh-add ./company

# 验证私钥是否添加成功
$ ssh-add -l
```

::: tip
若执行 `ssh-add` 提示「Could not open a connection to your authentication agent」，先执行 `ssh-agent bash` 启动代理，再重新添加私钥。
:::

## 测试 SSH 连接 {#test-ssh-connection}

验证配置是否生效，通过自定义的 `Host` 别名测试与远程仓库的连接：

```sh
# 测试个人账户连接（对应 personal-host 配置）
$ ssh -T git@personal-host
# 或者
$ git git@personal-host:xxx/xxx.git

# 测试公司账户连接（对应 company-host 配置）
$ ssh -T git@company-host
# 或者
$ git git@company-host:xxx/xxx.git
```

若输出「Hi 用户名！You've successfully authenticated...」，说明连接成功。

## 项目配置本地账户 {#configure-local-account-for-project}

进入具体项目的根目录，配置该仓库专属的本地级别用户名和邮箱，确保提交记录归属正确：

```sh
# 进入项目根目录
$ cd /path/to/your/project

# 配置本地账户（个人项目用个人信息，公司项目用公司信息，假设进入个人项目）
$ git config --local user.name "personal"  # 对应账户名
$ git config --local user.email "personal@abc.com"  # 对应邮箱

# 验证本地配置是否正确
$ git config --local --list
```

每个项目需单独配置一次，配置后仅对当前项目生效。

## `config` 文件属性介绍 {#introduce-config}

`config` 文件中每个 `Host` 节点的核心属性说明如下，按需配置即可：

| 属性名 | 取值说明 |
|-|-|
| Host | 自定义别名，将替代远程仓库域名出现在 Git 命令中，如 `Host mygithub`，那么 `git@` 后面紧跟的名字改为 `mygithub`, 例：`git clone git@mygithub:用户名/仓库名.git` |
| HostName | 远程仓库真实域名 |
| IdentityFile | 私钥文件(id_rsa)的的绝对路径，确保路径正确，否则无法匹配密钥 |
| PreferredAuthentications | 认证优先级，可设为 `publickey`, `password`, `keyboard-interactive`，建议设为 `publickey` |
| User | 远程仓库用户名，可省略，SSH 认证主要依赖密钥，用户名仅作为辅助标识 |

每个账号单独配置一个 `Host`，每个 `Host`要取一个别名，每个 `Host` 主要配置 `HostName` 和 `IdentityFile` 两个属性即可。

## 修正历史提交的用户名和邮箱 {#correcting-historical-usernames-and-email-addresses}

若已用错误账户提交代码，可通过 `git filter-branch` 命令修改历史提交记录（**谨慎使用，会改写仓库历史**）：

```sh
$ git filter-branch -f --commit-filter '
  if [ "$GIT_COMMITTER_NAME" = "错误用户名" ];
    then
      GIT_COMMITTER_NAME="目标用户名";
      GIT_AUTHOR_NAME="$GIT_COMMITTER_NAME";
      GIT_COMMITTER_EMAIL="目标邮箱";
      GIT_AUTHOR_EMAIL="$GIT_COMMITTER_EMAIL";
      git commit-tree "$@";
    else
      git commit-tree "$@";
  fi' HEAD
```

::: danger
该命令会改写仓库提交历史，若操作多人协作仓库，务必提前和团队成员沟通，避免覆盖他人提交！
:::

### 命令说明

- 替换`错误用户名`、`目标用户名`、`目标邮箱`为实际信息。
- `HEAD` 表示修改所有历史提交，可指定范围，例：`HEAD~5..HEAD` 仅修改最近 5 次提交。

修改完成后，强制推送到远程仓库（确保本地是最新代码，避免覆盖他人提交）：

```sh
$ git push --force
```
