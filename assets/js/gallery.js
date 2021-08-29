// ----------------------------
// Script for the image gallery at events.html
// ----------------------------

// Gets an array of all images of the gallery
let photoCollection = document.getElementsByClassName("gallery-image")

// Gets large image and its enclosing div
let largeImageBox = document.getElementById("openedImgBox");
let largeImage = document.getElementById("openedImg");

// Get the navigation elements of the gallery once the image is opened
let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");
let closeX = document.getElementById("closeX");

// Initialize empty objects for next and previous image
let nextImage = { src: '', alt: '' };
let prevImage = { src: '', alt: '' };

// Initialize object for the last image in the gallery
let lastImage = {
    src: photoCollection[photoCollection.length - 1].src,
    alt: photoCollection[photoCollection.length - 1].alt
};

// Loops through the photoCollection array
for (let i = 0; i < photoCollection.length; i++) {

    // Adds event listener to array
    photoCollection[i].addEventListener("click", openLarge);

}

// Function to open the large image
function openLarge() {
    // Shows the large image
    largeImageBox.style.display = "flex";

    // Modifies the src and alt of the opened image
    [largeImage.src, largeImage.alt] = [this.src, this.alt];
};


// Event listeners to move to the previous and next photos

// Event listeners for clicks on the arrows
rightArrow.addEventListener("click", goNext);
leftArrow.addEventListener("click", goPrev);

// Event listeners for clicks on the X to close the large image
closeX.addEventListener("click", closeImage);

// Event listener for keyboard arrow presses
document.addEventListener('keydown', function (event) {
    // If the right arrow key is pressed, moves to next photo
    if (event.key == 'ArrowRight') {
        goNext();
    }
    // If the left arrow key is pressed, moves to previous photo
    else if (event.key == 'ArrowLeft') {
        goPrev();
    }

    // If the escape key is pressed, closes the large image
    else if (event.key == 'Escape') {
        closeImage();
    }
});


// Function to move to the next photo
function goNext() {

    // Loops through the gallery array
    for (let i = 0; i < photoCollection.length; i++) {

        // Checks the current opened photo and if it's not the last image
        if (largeImage.src == photoCollection[i].src &&
            i + 1 < photoCollection.length) {
            // Updates next image in the gallery
            nextImage.src = photoCollection[i + 1].src;
            nextImage.alt = photoCollection[i + 1].alt;
        }

        // Checks the current opened photo and if it's the last image
        else if (largeImage.src == photoCollection[i].src) {

            // Updates next photo to the first in the gallery
            nextImage.src = photoCollection[0].src;
            nextImage.alt = photoCollection[0].alt;
        }
    };

    // Updates the opened image
    [largeImage.src, largeImage.alt] = [nextImage.src, nextImage.alt];
};


// Function to move to the previous image
function goPrev() {

    // Loops through the gallery array
    for (let i = 0; i < photoCollection.length; i++) {

        // Checks the current opened photo and if it's not the first image
        if (largeImage.src == photoCollection[i].src &&
            i != 0) {
            // Updates previous image in the gallery
            prevImage.src = photoCollection[i - 1].src;
            prevImage.alt = photoCollection[i - 1].alt;
        }

        // Checks the current opened photo and if it's the first image
        else if (largeImage.src == photoCollection[i].src) {

            // Updates previous photo to the last in the gallery
            prevImage.src = lastImage.src;
            prevImage.alt = lastImage.alt;
        }
    };

    // Updates the opened image
    [largeImage.src, largeImage.alt] = [prevImage.src, prevImage.alt];
};


// Function to close the large image
function closeImage() {
    largeImageBox.style.display = "none";
}

