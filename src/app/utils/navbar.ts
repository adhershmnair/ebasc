'use client';

export function initNavbarHandlers() {
  if (typeof window === 'undefined') return;

  // Prevent body scroll when menu is open
  document.body.addEventListener('touchmove', (e) => {
    if (document.body.classList.contains('menu-open')) {
      e.preventDefault();
    }
  }, { passive: false });

  // Handle escape key to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      const toggleButton = document.querySelector('.navbar-toggler') as HTMLButtonElement;
      toggleButton?.click();
    }
  });
}
