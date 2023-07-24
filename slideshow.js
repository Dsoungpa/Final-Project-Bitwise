// This addEventListener makes sure that the HTML is fully loaded
// before running the .js file
document.addEventListener("DOMContentLoaded", function () {
    // JavaScript for image cycle
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        // Get all slide elements
        const slides = document.getElementsByClassName("mySlides");

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Show the current slide
        slides[slideIndex].style.display = "block";

        // Increment the slide index
        slideIndex++;

        // Reset the index if it goes beyond the number of slides
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        // Repeat the slideshow every 3 seconds (adjust the duration as needed)
        setTimeout(showSlides, 3000);
    }
});
