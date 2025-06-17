
  /*-------------------------------------
  Simple Carousel 
  -------------------------------------*/ 

// script.js
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    clearInterval(autoSlide); // Clear the interval on user interaction
    showSlides(slideIndex += n);
    autoSlide = setInterval(function() { plusSlides(1) }, 4000); // Restart the auto-slide interval
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Auto slide every 4 seconds
var autoSlide = setInterval(function() { plusSlides(1) }, 4000);
