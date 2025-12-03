document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollAnimations();
    initActiveNavLinks();
});
const appStore  = 'https://apps.apple.com/ca/app/primekar/id6753017125';      // iOS / macOS
const playStore = 'https://play.google.com/store/apps/details?id=com.primekar.customer&pcampaignid=web_share';

document.getElementById('storeBtn').addEventListener('click', () => {
  const isApple = /iPad|iPhone|iPod|Mac/i.test(navigator.userAgent);
  window.open(isApple ? appStore : playStore, '_blank');
});

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

function initActiveNavLinks() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === currentPage ||
            (currentPage === '/' && link.getAttribute('href') === '/') ||
            (currentPage.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
            link.classList.add('active');
        }
    });
}
