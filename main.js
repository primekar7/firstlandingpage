document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollAnimations();
    initActiveNavLinks();
});
const appStore  = 'https://apps.apple.com/ca/app/primekar/id6753017125';      // iOS / macOS
const playStore = 'https://play.google.com/store/apps/details?id=com.primekar.customer&pcampaignid=web_share';


// 1.  Wait until the DOM is ready (paranoid mode)
document.addEventListener('DOMContentLoaded', () => {

  // 2.  Grab the button
  const btn = document.getElementById('storeBtn');
  if (!btn) {                       // basic sanity check
    console.error('#getAppBtn not found');
    return;
  }

  // 3.  Attach the click handler
  btn.addEventListener('click', () => {
    const isApple = /iPad|iPhone|iPod|Mac/i.test(navigator.userAgent);
    const url = isApple
      ? 'https://apps.apple.com/ca/app/primekar/id6753017125'   // <-- change only the ID
      : 'https://play.google.com/store/apps/details?id=com.primekar.customer&pcampaignid=web_share'; // <-- change only the package

    console.log('Opening:', url);   // helps debugging
    window.open(url, '_blank');
  });
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
