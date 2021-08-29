let menuBurger = document.getElementById("menuBurger");

menuBurger.addEventListener("click", function () {
    let siteMenu = document.getElementById("nav-bar");
    if (siteMenu.style.display === "block") {
        document.getElementById("nav-bar").style.display = "none";
    } else {
        document.getElementById("nav-bar").style.display = "block";
    }
});