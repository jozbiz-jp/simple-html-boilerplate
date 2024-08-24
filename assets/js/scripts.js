/* simple-html-boilerplate/assets/js/scripts.js */

const toggle = () => {
    const nav = document.getElementById("navbar");
    nav.className === "navbar" ? nav.className += " responsive" : nav.className = "navbar";
};

document.addEventListener('DOMContentLoaded', function () {
    let navbarButton = document.getElementById("navbarToggle");
    navbarButton.addEventListener("click", toggle);
});