---
layout: default
title: 首页
---

<section class="intro">
  <div>
    <p class="kicker">WRITING IN PUBLIC · 2026</p>
    <h1>把复杂的事，<em>讲清楚。</em></h1>
    <p>这里记录软件、产品与日常生活里的观察。少一点噪音，多一点经过实践的答案。</p>
    <div class="intro-actions"><a class="button button-primary" href="#latest">开始阅读 <span>↓</span></a><a class="button button-quiet" href="/articles/">浏览全部文章</a></div>
  </div>
  <aside class="intro-note"><span class="note-mark">“</span><p>把每一次思考留下来，时间会替你整理出答案。</p><small>— 云客的写作笔记</small></aside>
</section>

<section class="home-section" id="latest">
  <div class="section-heading"><div><p class="kicker">LATEST NOTES</p><h2>最新文章</h2></div><a href="/articles/">查看归档 <span>↗</span></a></div>

{% assign featured = site.posts.first %}
<article class="featured-post">
  <div class="featured-copy">
    <p class="post-meta">精选文章 · {{ featured.date | date: "%Y.%m.%d" }}{% if featured.categories.size > 0 %} · {{ featured.categories | join: " / " }}{% endif %}</p>
    <h3><a href="{{ featured.url }}">{{ featured.title }}</a></h3>
    {% if featured.description %}<p>{{ featured.description }}</p>{% endif %}
    <a class="read-more" href="{{ featured.url }}">阅读全文 <span>→</span></a>
  </div>
  {% if featured.cover %}<a class="featured-cover" href="{{ featured.url }}"><img src="{{ featured.cover | relative_url }}" alt="{{ featured.cover_alt | default: featured.title | escape }}" loading="eager"></a>{% endif %}
</article>

<div class="post-list">
{% for post in site.posts offset: 1 limit: 4 %}
  <article class="post-preview">
    <div class="post-preview-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m.%d" }}</time><span>{{ post.date | date: "%Y" }}</span></div>
    <div><p class="post-meta">{% if post.categories.size > 0 %}{{ post.categories | join: " / " }}{% endif %}</p>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      {% if post.description %}<p>{{ post.description }}</p>{% endif %}
      <a class="read-more" href="{{ post.url }}">阅读全文 <span>→</span></a>
    </div>
  </article>
{% endfor %}
</div>
</section>

<p class="archive-link"><a href="/articles/">查看全部文章 →</a></p>

<section class="home-topics">
  <div><p class="kicker">EXPLORE BY TOPIC</p><h2>按主题阅读</h2></div>
  <div class="topic-list">{% for category in site.categories %}<a href="/articles/?topic={{ category[0] | slugify }}">{{ category[0] }} <sup>{{ category[1].size }}</sup></a>{% endfor %}</div>
</section>
