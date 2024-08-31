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

/**
 * Created by Kupletsky Sergey on 05.11.14.
 *
 * Material Design Responsive Table
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.
 * JS used only for table constructor: you don't need it in your project
 */

$(document).ready(function() {

  var table = $('#table');

  // Table bordered
  $('#table-bordered').change(function() {
      var value = $( this ).val();
      table.removeClass('table-bordered').addClass(value);
  });

  // Table striped
  $('#table-striped').change(function() {
      var value = $( this ).val();
      table.removeClass('table-striped').addClass(value);
  });

  // Table hover
  $('#table-hover').change(function() {
      var value = $( this ).val();
      table.removeClass('table-hover').addClass(value);
  });

  // Table color
  $('#table-color').change(function() {
      var value = $(this).val();
      table.removeClass(/^table-mc-/).addClass(value);
  });
});

// jQuery’s hasClass and removeClass on steroids
// by Nikita Vasilyev
// https://github.com/NV/jquery-regexp-classes
(function(removeClass) {

jQuery.fn.removeClass = function( value ) {
  if ( value && typeof value.test === "function" ) {
    for ( var i = 0, l = this.length; i < l; i++ ) {
      var elem = this[i];
      if ( elem.nodeType === 1 && elem.className ) {
        var classNames = elem.className.split( /\s+/ );

        for ( var n = classNames.length; n--; ) {
          if ( value.test(classNames[n]) ) {
            classNames.splice(n, 1);
          }
        }
        elem.className = jQuery.trim( classNames.join(" ") );
      }
    }
  } else {
    removeClass.call(this, value);
  }
  return this;
}

})(jQuery.fn.removeClass);