
function toggleNavbar() {
  var navbar = document.getElementById("main-nav");
  if (navbar.className === "top-nav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "top-nav";
  }
}
