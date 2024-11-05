$(document).ready(function() {
    let slides = $(".slider .slide");
    let currentIndex = 0;
    let slideIndex = {};

    function showSlide(index) {
        slides.hide();
        slides.eq(index).fadeIn();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Change image every 3 seconds

    // Set slide index for each slider to 0 initially
    $('.project-slider-container').each(function() {
        let sliderId = $(this).attr('id');
        slideIndex[sliderId] = 0;
        showSlides(sliderId, slideIndex[sliderId]);
    });

    // Next/previous controls
    $(".next").click(function () {
        let sliderId = $(this).data('slider');
        showSlides(sliderId, slideIndex[sliderId] += 1);
    });

    $(".prev").click(function () {
        let sliderId = $(this).data('slider');
        showSlides(sliderId, slideIndex[sliderId] -= 1);
    });

    // Function to show slides
    function showSlides(sliderId, n) {
        let slides = $("#" + sliderId + " .project-slide");
        if (n >= slides.length) {
            slideIndex[sliderId] = 0;
        }
        if (n < 0) {
            slideIndex[sliderId] = slides.length - 1;
        }

        slides.hide();
        slides.eq(slideIndex[sliderId]).show();
    }

    const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Select all elements with the class "fade-in"
// Select all elements with the class "fade-in"
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the visible class to trigger the animation
      entry.target.classList.add('visible');
    } else {
      // Remove the visible class when the element leaves the viewport
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of element is in view

// Observe each element
faders.forEach(fader => observer.observe(fader));

});


