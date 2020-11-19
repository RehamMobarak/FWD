/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar");
const navFragment = document.createDocumentFragment();
const links = document.querySelectorAll(".navLink");
const topBtn = document.getElementById("topBtn");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

sections.forEach(function (section) {
  let sectionName = section.getAttribute("data-nav");
  let sectionId = section.getAttribute("id");
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.innerText = sectionName;
  link.setAttribute("href", "#" + sectionId);
  link.setAttribute("class", "navLink");
  li.appendChild(link);
  navFragment.appendChild(li);
});
navbar.appendChild(navFragment);

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    section.classList.remove("active");
    let dimensions = section.getBoundingClientRect();
    let isVisible =
      dimensions.top >= 0 &&
      dimensions.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);
    if (isVisible) {
      section.classList.add("active");
    }
  });
});

// Scroll to anchor ID using scrollTO event

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    scrollTo("#" + link.innerText, e);
  });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Back to top
window.onscroll = function() {showTopBtn()};

function showTopBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// scroll to the top of the document
function backTopBtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Set sections as active
