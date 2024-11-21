// Toggle menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Hide menu scroll
window.addEventListener('scroll', () => {
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }

  // Shadow navbar scroll
  if (window.scrollY > 10) {
    navbar.classList.add('bg-white', 'shadow-md');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-white', 'shadow-md');
    navbar.classList.add('bg-transparent');
  }
});