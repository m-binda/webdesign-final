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

// Changes the logo for a more vertical one for smaller screens.
let screenWidth = window.innerWidth;
let newLogo = document.getElementById("logo-img");

if (screenWidth < 700) {
    newLogo.src = 'assets/logos/logo-up.png';
    newLogo.style.height = "250px"
    newLogo.style.width = "250px"
};