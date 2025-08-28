---
title: Git 多账户配置
date: 2022-07-10T00:00:00
reviseDate: 2025-08-28T09:58:00
---

当一位开发者拥有多个 Git 账户，在操作（如：commit）Git 时应该注意下当前账户，若随意使用不同账户，那么操作记录的所属人会变得混乱不堪，如果需要统计数据也会增加复杂度。

下面我们通过配置做到一劳永逸，在 Git 中，配置可分为：

- system（系统级别）
- global（全局级别）
- local（本地级别）

以下命令查看各自配置：

```sh
$ git config --system --list
$ git config --global --list
$ git config --local --list
```

配置中遇到相同关键字（key）采用覆盖模式，覆盖规则：`system` < `global` < `local`，后者覆盖前者。

多数网络教程中，通常教大家配置全局级别（global）的用户名（user.name）和邮箱（user.email）。

::: warning 注意
步骤 1 到 7 中，如果 Git 使用 `http(s)`，那么只需要看[步骤 1](#chong-zhi-quan-ju-pei-zhi) 和[步骤 7](#tian-jia-xiang-mu-zhang-hu)。
:::

## 1.重置全局配置 {#chong-zhi-quan-ju-pei-zhi}

```sh
# 查看全局配置
$ git config --global --list

# 若存在用户名和邮箱则清除
$ git config --global --unset user.name
$ git config --global --unset user.email
```

## 2.生成不同账户的公私钥 {#sheng-cheng-bu-tong-zhang-hu-de-gong-si-yao}

启动终端，通过命令进入到 `.ssh` 文件夹（如果自定义，进入自定义文件夹）中（这步网络上多数教程没有教，新手很容易不知道怎么回事），输入以下命令生成不同账户的公私钥。

假设现在有两个账户:

- 个人
  - 账户：`personal`
  - 邮箱：`personal@abc.com`

- 公司
  - 账户：`company`
  - 邮箱：`company@abc.com`

```sh
$ ssh-keygen -t rsa -C "你的邮箱" # 输入完回车（Enter）

# 回车后提示需要键入关键字（也是文件名），一定需要输入，因为默认生成的文件就叫做 id_rsa，如果不输入后续出提示覆盖文件

# 个人账户
# ssh-keygen -t rsa -C "personal@abc.com"
# Enter file in which to save the key (~/.ssh/id_rsa): personal
# ...(直接回车到结束)

# 公司账户
# ssh-keygen -t rsa -C "company@abc.com"
# Enter file in which to save the key (~/.ssh/id_rsa): company
# ...(直接回车到结束)
```

## 3.配置远程仓库公私钥 {#deng-lu-dui-ying-de-cang-ku-she-zhi-gong-si-yao}

gitee，gitlab，github 各自设置教程请网上查阅。

## 4.配置参数 {#pei-zhi-can-shu}

还是之前的 `.ssh` 文件夹（如果是自定义，进入自定义文件夹），在根级目录下新建 `config` 文件（注意无尾缀），键入以下信息。

```sh
# 个人
Host PersonalHost # 区分大小写，建议全部小写，输入命令会好看点（此处为了说明采用首字母大写）
HostName gitee.com
IdentityFile /.ssh/personal # 绝对路径
PreferredAuthentications publickey # 可省略不写
User "你的个人账户名（本次模拟中填写 personal）" # 可省略不写

# 公司
Host CompanyHost
HostName gitee.com
IdentityFile /.ssh/company
PreferredAuthentications publickey
User "你的公司账户名（本次模拟中填写 company）"
```

## 5.添加私钥到本地 {#tian-jia-si-yao-dao-ben-di}

回到终端上，键入以下信息。

```sh
# personal，company 是私钥文件名称，也就是刚刚键入的关键字
$ ssh-add ./personal
$ ssh-add ./company
```

## 6.测试 {#ce-shi}

继续使用终端上，键入以下信息。

```sh
# PersonalHost，CompanyHost 是 config 文件中 Host 属性的对应名称
$ git git@PersonalHost:xxx/xxx.git
$ git git@CompanyHost:xxx/xxx.git
```

## 7.添加项目账户 {#tian-jia-xiang-mu-zhang-hu}

使用终端，通过命令进入**项目的根目录**，键入以下命令来配置本地级别（local）：

```sh
# 注意账号和邮箱需要对应上
$ git config user.name "你的账户" 
$ git config user.email "你的邮箱"
```

以上结束。

## `config` 文件属性介绍 {#config-wen-jian-shu-xing-jie-shao}

每个账号单独配置一个 `Host`，每个 `Host`要取一个别名，每个 `Host` 主要配置 `HostName` 和 `IdentityFile` 两个属性即可。

| 属性名 | 值 |
|-|-|
| Host | 随意取，不过会影响命令，如 `Host mygithub`，那么 `git@` 后面紧跟的名字改为 mygithub`git clone git@mygithub:xxx.git` |
| HostName | 真实的域名地址 |
| IdentityFile | id_rsa 的地址，使用绝对地址 |
| PreferredAuthentications | 配置登录时用什么权限认证，可设为 `publickey`, `password`, `keyboard-interactive` |
| User | 配置使用用户名 |

## 如何修正之前提交的用户名和邮箱呢？ {#ru-he-xiu-zheng-zhi-qian-ti-jiao-de-yong-hu-ming-he-you-xiang-ne}

git中最猛的后悔药，没有把握慎用。

```sh
$ git filter-branch -f --commit-filter '
  if [ "$GIT_COMMITTER_NAME" = "已提交的用户名" ];
    then
      GIT_COMMITTER_NAME="想要变成的用户名";
      GIT_AUTHOR_NAME="$GIT_COMMITTER_NAME";
      GIT_COMMITTER_EMAIL="想要变成的邮箱";
      GIT_AUTHOR_EMAIL="$GIT_COMMITTER_EMAIL";
      git commit-tree "$@";
    else
      git commit-tree "$@";
  fi' HEAD
```

执行命令之后，此时用户名和邮箱都已经修改为想要变成的样子，再执行强制推向远程，要确保已经是最新的HEAD否则会覆盖他人编写的代码。（`HEAD` 可以修改为 `HEAD~5..HEAD` 表示最近的5个提交）

```sh
$ git push --force
```

### `git filter-branch` 妙用 {#git-filter-branch-miao-yong}

如果在某次提交时提交了某个大文件或者敏感文件，虽然可以在下次提交中删除该文件，或者把该文件添加到 `.gitignore` 中，但是如果回溯到某个提交时那个文件还是存在，现在想要将所有历史的提交中移出该文件。

```sh
# 中间引号那一段是shell脚本
$ git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch path' --prune-empty --tag-name-filter cat -- --all

# 强制推向远程，可能会覆盖他人的提交
$ git push --force
```

