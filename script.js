// js/main.js - Progressive JS Enhancements for MoveWithUs
document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const transition = reducedMotion ? 'none' : 'opacity 0.3s ease, transform 0.3s ease';

  // ENHANCEMENT 1: Class-Type Filtering (improved from your code)
  const classFilter = document.getElementById('class-type');
  if (classFilter) {
    classFilter.addEventListener('change', () => {
      const selected = classFilter.value;
      const cards = document.querySelectorAll('.class-card, .program-card');
      
      cards.forEach(card => {
        const type = card.getAttribute('data-type');
        if (selected === 'all' || type === selected) {
          card.style.display = 'block';
          if (!reducedMotion) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        } else {
          if (!reducedMotion) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
          }
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  }

  // ENHANCEMENT 2: Hamburger Navigation Toggle
  const hamburger = document.querySelector('.nav-toggle, .hamburger, [class*="toggle"]');
  const nav = document.querySelector('.nav-links, .primary-nav');
  const backdrop = document.querySelector('.backdrop') || document.createElement('div');
  
  if (hamburger && nav) {
    // Create backdrop if missing
    if (!backdrop.classList.contains('backdrop')) {
      backdrop.classList.add('backdrop', 'hidden');
      document.body.appendChild(backdrop);
    }
    
    hamburger.addEventListener('click', () => {
      const isExpanded = nav.getAttribute('aria-expanded') === 'true';
      nav.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('slide-in', !isExpanded);
      backdrop.classList.toggle('hidden');
      
      // Icon toggle (hamburger ↔ close)
      if (!reducedMotion && !isExpanded) {
        hamburger.innerHTML = '×';
      } else {
        hamburger.innerHTML = '☰';
      }
    });
    
    // Close on backdrop click
    backdrop.addEventListener('click', () => {
      nav.setAttribute('aria-expanded', 'false');
      nav.classList.remove('slide-in');
      backdrop.classList.add('hidden');
      hamburger.innerHTML = '☰';
    });
  }

  // Bonus: Your search functionality (kept + smoothed)
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const cards = document.querySelectorAll('.program-card, .class-card');
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'block';
          if (!reducedMotion) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        } else {
          if (!reducedMotion) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
          }
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  }
});
