// Burger menu
const burger = document.querySelector('.burger');
const nav = document.getElementById('mainNav');
burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
  burger.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});
document.querySelectorAll('#mainNav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Pills filter
document.addEventListener('click', (e) => {
  const pill = e.target.closest('.pill');
  if(!pill) return;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  const filter = pill.dataset.filter;
  document.querySelectorAll('.gallery .card').forEach(card => {
    const cat = card.getAttribute('data-cat');
    card.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox__close');

function openLightbox(src, alt='') {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.style.display = 'flex';
}
function closeLightbox() { lightbox.style.display = 'none'; }

document.addEventListener('click', (e) => {
  const img = e.target.closest('.gallery img');
  if (img) openLightbox(img.src, img.alt);
  if (e.target === lightbox) closeLightbox();
});
closeBtn?.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
