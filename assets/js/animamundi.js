// Toggles visibility of Articles and Videos sections on review.html

// Initiate variables for the buttons
let articlesButton = document.getElementById("button-review-articles");
let videosButton = document.getElementById("button-review-videos");

// Articles start active with a different colored background
document.getElementById("button-review-articles").style.backgroundColor = "#f7800065"

// Event listener for the articles button
articlesButton.addEventListener("click", function () {
    // Changes the display value of the sections
    document.getElementById("articles-section").style.display = "block";
    document.getElementById("videos-section").style.display = "none";

    // Changes the background of the active section
    document.getElementById("button-review-articles").style.backgroundColor = "#f7800065";
    document.getElementById("button-review-videos").style.backgroundColor = "";
});

// Event listener for the videos button
videosButton.addEventListener("click", function () {
    // Changes the display value of the sections
    document.getElementById("articles-section").style.display = "none";
    document.getElementById("videos-section").style.display = "block";

    // Changes the background of the active section
    document.getElementById("button-review-articles").style.backgroundColor = "";
    document.getElementById("button-review-videos").style.backgroundColor = "#f7800065";
});