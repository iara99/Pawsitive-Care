const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1500,
    reset: false,
})

sr.reveal('.hero-text', {delay:150});
sr.reveal('.hero-img', {delay:150});
sr.reveal('.hero-img-mobile', {delay:150});

sr.reveal('.container', {delay:150});

sr.reveal('.about-img', {delay:250});
sr.reveal('.text-about', {delay:250});

sr.reveal('.cont-features', {delay:250});
sr.reveal('.cont-phone', {delay:650});

sr.reveal('.cont-testimonials', {delay:450});

sr.reveal('.text-final', {delay:450});
sr.reveal('.img-final', {delay:450});



// TESTIMONIALS CAROUSEL 

const swiper = new Swiper('.testimonials-slider', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // responsive
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
    },
    autoplay: {
        delay: 5000,
      },
  });