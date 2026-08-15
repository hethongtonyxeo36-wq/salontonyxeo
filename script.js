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
