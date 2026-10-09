---
layout: default
title: 首页
---

<section class="intro">
  <p class="kicker">WRITING IN PUBLIC</p>
  <h1>把复杂的事，讲清楚。</h1>
  <p>这里记录我在软件、产品与日常生活里的观察。少一点噪音，多一点经过实践的答案。</p>
</section>

## 最新文章

<div class="post-list">
{% for post in site.posts %}
  <article class="post-preview">
    <p class="post-meta">{{ post.date | date: "%Y.%m.%d" }}{% if post.categories.size > 0 %} · {{ post.categories | join: " / " }}{% endif %}</p>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    <a class="read-more" href="{{ post.url | relative_url }}">阅读全文 →</a>
  </article>
{% endfor %}
</div>
