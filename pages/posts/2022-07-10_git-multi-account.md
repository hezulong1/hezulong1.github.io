---
title: Git 多账户配置
date: 2022-07-10
duration: 10分钟
tag: Git
---

平时工作中的 Git 账户和私人 Git 账户是不同的，在提交代码时候，之前基本很少注意提交名称。今天稍微调整顺便记录下如何统一自己的提交名称。电脑系统是 macOS Catalina 10.15.6（理论上 windows 和 mac 应该是一致的）。

Git 的配置分：

- system
- global
- local

可以通过以下命令可以查看各自配置：

```bash
git config --system --list
git config --global --list
git config --local --list
```

配置中相同 key，`system < global < local` 后者覆盖前者，所以我们需要记住这个规则。网络中通常教大家配置全局用户名（user.name）和邮箱（user.email），都是存放在 global 中。

## 1. 移除之前的全局配置

```bash
# 查看全局配置
git config --global --list

# 若存在用户名和邮箱则清除
git config --global --unset user.name
git config --global --unset user.email
```

## 2. 生成不同账户的公私钥

找到 **.ssh** 文件夹（如果自定义，进入你自定义文件夹）中，启动终端（这步网络上好多教程没有教，新手很容易不知道怎么回事），输入以下命令生成不同账户的公私钥。

> 假设现在有两个账户:
> - 私人的
>   name: personal
>   email: personal@fake.com
> - 公司的
>   name: company
>   email: company@fake.com
>

```bash
ssh-keygen -t rsa -C "your email"

# 回车会出现以下提示，此时提示需要键入关键字（也是文件名），此时一定需要输入，因为默认生成的文件就叫做 id_rsa，如果不输入后续出提示覆盖文件
# ssh-keygen -t rsa -C "personal@fake.com"
# Enter file in which to save the key (~/.ssh/id_rsa): personal
# ...(直接回车到结束)
# ssh-keygen -t rsa -C "company@fake.com"
# Enter file in which to save the key (~/.ssh/id_rsa): company
# ...(直接回车到结束)
```

## 3. 登陆对应的仓库设置公私钥

gitee，gitlab，github 对应设置教程请网上查阅。

## 4. 在 **.ssh** 文件夹新建文件名为 **config** 的文件（注意无尾缀）

```bash
# personal
Host PersonalHost # 区分大小写，建议直接全部小写，这样输入命令会好看点 :)，此处为了说明采用首字母大写
HostName gitee.com
# 可省
PreferredAuthentications publickey
# 可省
# User person
User "your personal name"
# 绝对路径
IdentityFile /.ssh/personal

# company
Host CompanyHost
HostName gitee.com
PreferredAuthentications publickey
# User company
User "your company name"
IdentityFile /.ssh/company
```

## 5. 私钥添加到本地

```bash
# company, personal 是私钥文件名称，也就是刚刚需要你键入的关键字
ssh-add ./company
ssh-add ./personal
```

## 6. 测试使用提交代码

```bash
# HostCompany, HostPersonal 是 config 文件中 Host 属性的对应名称
git git@HostCompany:xxx/xxx.git
git git@HostPersonal:xxx/xxx.git
```

## 7. 配置当前项目账户

进入当前项目内，然后启动终端。然后键入以下命令配置 local config。

```bash
git config user.name "your account" 
git config user.email "your email"
```

## 8. 题外话

### config 文件中属性介绍

每个账号单独配置一个 `Host`，每个 `Host`要取一个别名，每个 `Host` 主要配置 `HostName` 和 `IdentityFile` 两个属性即可。

| Property | Value |
|-|-|
| Host | 随意取，不过会影响命令，如 `Host mygithub`，那么 `git@` 后面紧跟的名字改为 mygithub`git clone git@mygithub:xxx.git` |
| HostName | 真实的域名地址 |
| IdentityFile | id_rsa 的地址，使用绝对地址 |
| PreferredAuthentications | 配置登录时用什么权限认证，可设为 `publickey`, `password`, `keyboard-interactive` |
| User | 配置使用用户名 |

### 如何修正之前提交的用户名和邮箱呢？

git中最猛的后悔药，没有把握慎用。

```bash
git filter-branch -f --commit-filter '
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

```bash
git push --force
```

### `git filter-branch` 妙用

如果在某次提交时提交了某个大文件或者敏感文件，虽然可以在下次提交中删除该文件，或者把该文件添加到 `.gitignore` 中，但是如果回溯到某个提交时那个文件还是存在，现在想要将所有历史的提交中移出该文件。

```bash
# 中间引号那一段是shell脚本
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch path' 
--prune-empty --tag-name-filter cat -- --all

# 强制推向远程，可能会覆盖他人的提交，所以称为最猛的后悔药
git push --force
```

