# 云客博客

使用 Jekyll 和 GitHub Pages 发布的个人博客，域名为 `www.yunkeweb.com`。

## 写新文章

在 `_posts` 下新建 `YYYY-MM-DD-title.md`：

```markdown
---
layout: default
title: "文章标题"
date: 2026-10-09 09:00:00 +0800
categories: [随笔]
description: "文章摘要"
---

正文从这里开始。
```

推送到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。

## 本地预览

安装 Ruby 与 Bundler 后：

```bash
bundle install
bundle exec jekyll serve
```

浏览器打开 `http://localhost:4000`。

## 域名

`CNAME` 已配置为 `www.yunkeweb.com`。在 DNS 服务商处添加：

```text
www  CNAME  <你的 GitHub 用户名>.github.io
```

然后在 GitHub 仓库的 `Settings → Pages` 中确认 Custom domain 为 `www.yunkeweb.com` 并启用 HTTPS。
