window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const progressBar = document.querySelector(".loading-progress");

    const delayDuration = 1000; // Delay duration in milliseconds

    // Simulate loading completion after a delay
    setTimeout(function () {
        // Hide the loading screen after the delay
        loadingScreen.style.opacity = "0"; // Fade out animation
        setTimeout(function () {
            loadingScreen.style.display = "none";
        }, 500); // Give some time for the fade-out animation to finish
    }, delayDuration);

    // Update the loading progress as assets load
    let assetsLoaded = 0;
    const totalAssets = 10; // Adjust this based on the total number of assets

    function updateProgressBar() {
        assetsLoaded++;
        // Example (6/10 = 0.6) -> (0.6 * 100 = 60%) then set that to the width
        const progress = (assetsLoaded / totalAssets) * 100;
        progressBar.style.width = progress + "%";
    }

    // Simulate asset loading by incrementing assetsLoaded
    setInterval(function () {
        updateProgressBar();
    }, 150); // Simulated asset loading interval in milliseconds
});