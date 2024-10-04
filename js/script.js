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