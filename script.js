
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));
const lightbox = document.querySelector('#lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(btn => btn.addEventListener('click', () => {
  lightboxImg.src = btn.dataset.img; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false');
}));
lightbox.querySelector('button').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
function closeLightbox(){ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lightboxImg.src=''; }
