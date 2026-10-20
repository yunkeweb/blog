# 云客博客

使用 Jekyll 和 GitHub Pages 发布的个人博客，域名为 `www.yunkeweb.com`。

## 写新文章

在 `_posts` 下新建 `YYYY-MM-DD-title.md`：

```markdown
---
layout: post
title: "文章标题"
date: 2026-10-09 09:00:00 +0800
categories: [随笔]
description: "文章摘要"
---

正文从这里开始。
```

推送到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。

文章标题由模板生成，正文从段落或 `## 二级标题` 开始即可；二、三级标题会自动生成文章目录。

需要封面时，在 front matter 中添加以下字段，并把图片放进 `assets/images/`：

```yaml
cover: /assets/images/article-cover.jpg
cover_alt: "图片内容的简短描述"
cover_credit: "摄影作者与平台"
cover_source: https://unsplash.com/photos/twukN12EN7c
```

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
