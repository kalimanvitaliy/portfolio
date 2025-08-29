// Burger menu
const burger = document.querySelector('.burger');
const nav = document.getElementById('mainNav');
burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
  burger.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});
document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Year
document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));

// Pills filter for masonry
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('.masonry .tile').forEach(tile => {
    const cat = tile.getAttribute('data-cat');
    tile.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox__close');
document.addEventListener('click', (e) => {
  const img = e.target.closest('.tile img');
  if (img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    lightbox.style.display = 'flex';
  }
  if (e.target === lightbox) lightbox.style.display = 'none';
});
closeBtn?.addEventListener('click', () => lightbox.style.display = 'none');
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.style.display = 'none'; });
