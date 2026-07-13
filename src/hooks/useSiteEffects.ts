import { useEffect } from 'react';

/**
 * Efeitos globais do site: matrix rain, menu mobile, animações de scroll,
 * link de navegação ativo e handlers dos modais. Registra funções globais
 * em `window` usadas pelos componentes de seção.
 */
export function useSiteEffects() {
  useEffect(() => {
    // Matrix Rain Effect
    const createMatrixRain = () => {
      const matrixContainer = document.getElementById('matrixRain');
      if (!matrixContainer) return;

      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const columns = Math.floor(window.innerWidth / 20);

      matrixContainer.innerHTML = '';

      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * 20 + 'px';
        column.style.animationDelay = Math.random() * 10 + 's';
        column.style.animationDuration = (8 + Math.random() * 4) + 's';

        let text = '';
        for (let j = 0; j < 20; j++) {
          text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
        }
        column.innerHTML = text;

        matrixContainer.appendChild(column);
      }
    };

    // Mobile menu toggle
    const toggleMobileMenu = () => {
      const menu = document.getElementById('mobileMenu');
      menu?.classList.toggle('hidden');
    };

    // Initialize effects
    createMatrixRain();

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all slide-in elements
    document.querySelectorAll('.slide-in').forEach(el => {
      observer.observe(el);
    });

    // Active nav link on scroll
    const handleScroll = () => {
      const navLinks = document.querySelectorAll('.nav-link');
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Make functions globally available
    (window as any).toggleMobileMenu = toggleMobileMenu;

    (window as any).openModal = (modalId: string) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    };

    (window as any).closeModal = (modalId: string) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    };

    // Modal event listeners
    const handleModalClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains('modal')) {
        (event.target as HTMLElement).classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
          openModal.classList.remove('show');
          document.body.style.overflow = 'auto';
        }
      }
    };

    document.addEventListener('click', handleModalClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleModalClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);
}
