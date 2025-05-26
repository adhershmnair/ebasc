'use client';

export function initNavbarHandlers() {
  if (typeof window === 'undefined') return;

  const isMobile = () => window.innerWidth <= 991;

  // Prevent body scroll when menu is open
  document.body.addEventListener('touchmove', (e) => {
    if (document.body.classList.contains('menu-open') && isMobile()) {
      e.preventDefault();
    }
  }, { passive: false });
  // Handle escape key to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open') && isMobile()) {
      const toggleButton = document.querySelector('.navbar-toggler') as HTMLButtonElement;
      toggleButton?.click();
    }
  });

  // Reset menu state on window resize
  window.addEventListener('resize', () => {
    if (!isMobile() && document.body.classList.contains('menu-open')) {
      document.body.classList.remove('menu-open');
      const navbar = document.querySelector('.navbar-collapse');
      const toggleButton = document.querySelector('.navbar-toggler') as HTMLButtonElement;
      navbar?.classList.remove('show');
      toggleButton?.classList.remove('is-active');
    }
  });
}
