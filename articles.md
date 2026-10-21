---
layout: default
title: 文章归档
permalink: /articles/
description: 云客博客的全部文章归档。
---

<header class="archive-header">
  <p class="kicker">THE ARCHIVE</p>
  <h1>文章归档</h1>
  <p>把写过的东西放在一起，方便回看，也方便从一个问题走到另一个问题。</p>
  <label class="archive-search"><span aria-hidden="true">⌕</span><input id="archive-search" type="search" placeholder="搜索文章标题或摘要" aria-label="搜索文章"></label>
</header>
<div class="archive-toolbar"><span id="archive-count">共 {{ site.posts.size }} 篇文章</span><div class="archive-filters"><button class="is-active" type="button" data-filter="all">全部</button>{% for category in site.categories %}<button type="button" data-filter="{{ category[0] | slugify }}">{{ category[0] }}</button>{% endfor %}</div></div>

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
<section class="archive-year">
  <h2>{{ year.name }}</h2>
  <div class="archive-list">
  {% for post in year.items %}
    <article class="archive-item" id="{{ post.categories.first | slugify }}" data-category="{% for category in post.categories %}{{ category | slugify }} {% endfor %}" data-search="{{ post.title | append: ' ' | append: post.description | downcase | escape }}">
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

<script src="{{ '/assets/js/archive.js' | relative_url }}" defer></script>
