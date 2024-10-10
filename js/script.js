console.log ("se deberia ejecutar")
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1500,
    // reset: true
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



// TESTIMONIALS OWL CAROUSEL 

// $('.owl-carousel').owlCarousel({
//     center: true,
//     items:3,
//     loop:true,
//     margin:10,
//     responsive:{
//         600:{
//             items:3
//         }
//     }
// });

// $('.owl-carousel').owlCarousel({
//     center: true,
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })



const swiper = new Swiper('.testimonials-slider', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
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