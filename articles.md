---
layout: default
title: 文章归档
permalink: /articles/
description: 云客博客的全部文章归档。
---

# 文章归档

这里按年份整理全部文章。每次在 `_posts` 中发布新文章后，此页面会自动更新。

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
<section class="archive-year">
  <h2>{{ year.name }}</h2>
  <div class="archive-list">
  {% for post in year.items %}
    <article class="archive-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m.%d" }}</time>
      <div>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        {% if post.description %}<p>{{ post.description }}</p>{% endif %}
      </div>
      {% if post.categories.size > 0 %}<span class="archive-category">{{ post.categories | join: " / " }}</span>{% endif %}
    </article>
  {% endfor %}
  </div>
</section>
{% endfor %}
