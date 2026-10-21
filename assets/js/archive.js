(() => {
  const input = document.querySelector('#archive-search');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const items = [...document.querySelectorAll('.archive-item')];
  const count = document.querySelector('#archive-count');
  if (!input || !items.length) return;
  let filter = new URLSearchParams(location.search).get('topic') || 'all';
  const update = () => {
    const query = input.value.trim().toLowerCase(); let visible = 0;
    items.forEach(item => { const show = (filter === 'all' || item.dataset.category.split(' ').includes(filter)) && (!query || item.dataset.search.includes(query)); item.hidden = !show; if (show) visible += 1; });
    document.querySelectorAll('.archive-year').forEach(year => { year.hidden = !year.querySelector('.archive-item:not([hidden])'); });
    count.textContent = query || filter !== 'all' ? `找到 ${visible} 篇文章` : `共 ${items.length} 篇文章`;
  };
  if (!buttons.some(button => button.dataset.filter === filter)) filter = 'all';
  buttons.forEach(button => button.classList.toggle('is-active', button.dataset.filter === filter));
  update();
  input.addEventListener('input', update);
  buttons.forEach(button => button.addEventListener('click', () => { filter = button.dataset.filter; buttons.forEach(item => item.classList.toggle('is-active', item === button)); update(); }));
  document.addEventListener('keydown', event => { if (event.key === '/' && document.activeElement !== input) { event.preventDefault(); input.focus(); } });
})();
