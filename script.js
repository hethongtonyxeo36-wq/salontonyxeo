// Off-canvas menu
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const offcanvas = document.getElementById('offcanvasMenu');
const scrim = document.getElementById('scrim');
const offcanvasNav = document.getElementById('offcanvasNav');

function openMenu() {
  offcanvas.classList.add('open');
  scrim.classList.add('open');
  offcanvas.setAttribute('aria-hidden', 'false');
  menuOpen.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  offcanvas.classList.remove('open');
  scrim.classList.remove('open');
  offcanvas.setAttribute('aria-hidden', 'true');
  menuOpen.setAttribute('aria-expanded', 'false');
}

if (menuOpen && offcanvas && scrim) {
  menuOpen.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  scrim.addEventListener('click', closeMenu);
  offcanvasNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// Customers lightbox
const customersGrid = document.getElementById('customersGrid');
const lightbox = document.getElementById('lightbox');
if (customersGrid && lightbox) {
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCount = document.getElementById('lightboxCount');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const thumbs = Array.from(customersGrid.querySelectorAll('img'));
  let current = 0;

  function show(index) {
    current = (index + thumbs.length) % thumbs.length;
    const img = thumbs[current];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCount.textContent = `${current + 1} / ${thumbs.length}`;
  }

  function openLightbox(index) {
    show(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  thumbs.forEach((img, i) => {
    img.closest('.ph-block').addEventListener('click', () => openLightbox(i));
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => show(current - 1));
  lightboxNext.addEventListener('click', () => show(current + 1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}

// Back to top
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
