// Swiper initialization
function initializeSwiper() {
  new Swiper(".mySwiper", {
    autoplay: {
      delay: 5000, // Delay between slides in milliseconds
  },
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
}


// Open and close navigation menu
function toggleNavMenu() {
  const body = document.querySelector('body');
  const navMenu = body.querySelector('.menu-content');
  const navOpenBtn = body.querySelector('.navOpen-btn');
  const navCloseBtn = navMenu.querySelector('.navClose-btn');

  if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
      navMenu.classList.add("open");
      body.style.overflowY = "hidden";
    });
  }

  if (navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    });
  }
}

// Change header background color on scroll
function changeHeaderColorOnScroll() {
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    const header = document.querySelector("header");

    if (scrollY > 5) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }

    // Scroll up button
    const scrollUpBtn = document.querySelector('.scrollUp-btn');

    if (scrollY > 250) {
      scrollUpBtn.classList.add("scrollUpBtn-active");
    } else {
      scrollUpBtn.classList.remove("scrollUpBtn-active");
    }
  });
}

// Set active navigation link based on scroll position
function setActiveNavLinkOnScroll() {
  const sections = document.querySelectorAll('section[id]');

  function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;

      const navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navId.classList.add("active-navlink");
      } else {
        navId.classList.remove("active-navlink");
      }

      navId.addEventListener("click", () => {
        const navMenu = document.querySelector('.menu-content');
        const body = document.querySelector('body');
        navMenu.classList.remove("open");
        body.style.overflowY = "scroll";
      });
    });
  }

  window.addEventListener("scroll", setActiveNav);
}

// Scroll Reveal Animation
function initializeScrollReveal() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  });

  sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
  .logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, { interval: 100 });

  sr.reveal(`.about-imageContent, .menu-items`, { origin: 'left' });
  sr.reveal(`.about-details, .time-table`, { origin: 'right' });
}

// Initialize all functions
function init() {
  initializeSwiper();
  toggleNavMenu();
  changeHeaderColorOnScroll();
  setActiveNavLinkOnScroll();
  initializeScrollReveal();
}

// Call init() when the DOM is ready
document.addEventListener("DOMContentLoaded", init);
document.getElementById("websiteSelect").addEventListener("change", function() {
  var selectedValue = this.value;
  if (selectedValue !== "") {
    window.location.href = selectedValue;
  }
});

