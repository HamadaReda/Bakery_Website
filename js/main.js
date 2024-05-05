let header = document.getElementById("main-header");
let navbar = document.getElementById("main-nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.getElementById("navbar-toggle").addEventListener("click", function () {
  navbar.classList.toggle("show");
});
// Function to check window width and toggle navbar class
function toggleNavbar() {
  if (window.innerWidth >= 992) {
    navbar.classList.remove("show");
  }
}

// Initial call to toggleNavbar to set initial state
toggleNavbar();

// Event listener for window resize event
window.addEventListener("resize", toggleNavbar);
