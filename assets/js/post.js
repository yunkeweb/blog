(() => {
  const content = document.querySelector('.post-content');
  const sidebar = document.querySelector('.post-sidebar');
  const list = document.querySelector('#post-toc-list');
  if (!content || !sidebar || !list) return;

  const headings = [...content.querySelectorAll('h2, h3')];
  if (headings.length === 0) return;

  const links = headings.map((heading, index) => {
    if (!heading.id) {
      let id = `section-${index + 1}`;
      while (document.getElementById(id)) id += '-section';
      heading.id = id;
    }
    const item = document.createElement('li');
    item.classList.toggle('toc-subheading', heading.tagName === 'H3');
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = heading.textContent;
    item.append(link);
    list.append(item);
    return link;
  });

  sidebar.hidden = false;
  const details = sidebar.querySelector('details');
  const desktop = window.matchMedia('(min-width: 1024px)');
  const updateDisclosure = () => { details.open = desktop.matches; };
  updateDisclosure();
  desktop.addEventListener('change', updateDisclosure);

  // Match the heading nearest the reading edge, including on hash navigation.
  const updateCurrent = () => {
    let current = 0;
    headings.forEach((heading, index) => {
      if (heading.getBoundingClientRect().top <= 120) current = index;
    });
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = headings.length - 1;
    }
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateCurrent();
      scheduled = false;
    });
  }, { passive: true });
  window.addEventListener('resize', updateCurrent);
  window.addEventListener('load', updateCurrent);
  updateCurrent();
})();
