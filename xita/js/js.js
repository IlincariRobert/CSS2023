// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var select1 = document.getElementById("select");

// Get the offset position of the navbar
var sticky = select1.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    select1.classList.add("sticky");
  } else {
    select1.classList.remove("sticky");
  }
}
