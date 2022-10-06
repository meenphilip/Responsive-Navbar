const navToggler = document.querySelector(".nav-toggler");

// Event Listener
navToggler.addEventListener("click", () => {
  // rotate the bar when clicked
  navToggler.classList.toggle("active");

  // select the ul with class nav
  const nav = document.querySelector(".nav");
  // display list when toggler is clicked
  nav.classList.toggle("open");

  // when open change max height & scroll height
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    // remove the style element
    nav.removeAttribute("style");
  }
});
