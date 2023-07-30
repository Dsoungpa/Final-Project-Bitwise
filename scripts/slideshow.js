document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      const slides = document.getElementsByClassName("mySlides");
  
      // Hide all slides by setting opacity to 0
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
      }
  
      // Reset the index if it goes beyond the number of slides
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
  
      // Show the current slide with a fade-in effect by changing opacity to 1
      slides[slideIndex].style.opacity = 1;
  
      // Increment the slide index
      slideIndex++;
  
      // Repeat the slideshow every 4 seconds (adjust the duration as needed)
      setTimeout(showSlides, 2500);
    }
  });
  