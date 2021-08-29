// Add functionality to open and close the menu by clicking at the
// hamburger icon.

// Gets the burger icon element
let menuBurger = document.getElementById("menuBurger");

// Adds an event listener for the burger icon element
menuBurger.addEventListener("click", function () {
    // Gets the nav bar
    let siteMenu = document.getElementById("nav-bar");

    // Opens and closes the nav bar depending on its initial display value
    if (siteMenu.style.display === "block") {
        document.getElementById("nav-bar").style.display = "none";
    } else {
        document.getElementById("nav-bar").style.display = "block";
    }
});