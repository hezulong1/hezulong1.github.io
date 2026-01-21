---
title: Git 命令参考
date: 2022-02-23
layout: post
category: 笔记
---

## 删除分支 {#shan-chu-fen-zhi}

```sh
# 删除本地分支
$ git branch -d [分支名]
# 强制删除本地分支
$ git branch -D [分支名] # 等价于 git branch --delete --force
# 删除远端分支
$ git push origin --delete [分支名]
```

## 设置本地名称和邮箱 {#she-zhi-ben-di-ming-cheng-he-you-xiang}

更加细致可以看 [Git 多账户配置](./git-multiple-account-configuration)

```sh
$ git config --local user.name "自己的名称（可以是中文）"
$ git config --local user.email "自己的邮箱"
```

## 查询代码行数 {#cha-xun-dai-ma-hang-shu}

```sh
$ git log  --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```
