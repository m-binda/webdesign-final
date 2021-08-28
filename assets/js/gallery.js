// ----------------------------
// Script for the image gallery at events.html
// ----------------------------

let photoImage = document.getElementsByClassName("gallery-image")
let closeX = document.getElementById("closeX");

function openFullImg(photoSrc) {
    document.getElementById("fullImgBox").style.display = "flex";
    document.getElementById("fullImg").src = photoSrc;
};

closeX.addEventListener("click", function () {
    document.getElementById("fullImgBox").style.display = "none";
});