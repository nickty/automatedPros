document.addEventListener('DOMContentLoaded', () => {
    // Your animation code here
    gsap.from('.header', { duration: 1, y: -50, opacity: 0, ease: 'power1.out' });
    gsap.from('.about-section', { duration: 1, opacity: 0, delay: 0.5, ease: 'power1.out' });
    gsap.from('.about-us-section', { duration: 1, opacity: 0, delay: 0.5, ease: 'power1.out' });
  });
  