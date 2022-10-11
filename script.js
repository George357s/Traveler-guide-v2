const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("navBtn");
let bol = false;
const offset = 90;

/* Scroll event listener to the page */
window.addEventListener("scroll", () => {
   /* If the page is scrolled by 90px */
   if (pageYOffset > offset && bol === false) {
      /* Adds classes to change the navbat to the light version */
      /* bg white class */
      navbar.classList.add("bg-light");
   /* Changes text to black */
   navbar.classList.remove("navbar-dark");
   navbar.classList.add("navbar-light");
   /* Adds a shadow */
   navbar.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
   /* Prevents the event from starting more than once */
   bol = true;
   /* Removes the classes when the page is scrolled back up */
} else if (pageYOffset <= offset && bol === true) {
   /* Changes the background to be transparent */
   navbar.classList.remove("bg-light");
   /* Changes the text back to white */
   navbar.classList.remove("navbar-light");
   navbar.classList.add("navbar-dark");
   /* Removes the shadow */
   navbar.style.boxShadow = "none";
   /* Prevents the event from initating more than once */
   bol = false;
}
   });