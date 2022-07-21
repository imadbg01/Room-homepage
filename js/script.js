const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const slides = document.querySelectorAll("[data-show]");

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);

function showPrevSlide() {
  slides.forEach((slide) => {
    const slideIndex = slide.getAttribute("data-index");
    const isShow = slide.getAttribute("data-show");
    if (isShow === "true" && slideIndex === "0") {
      slide.setAttribute("data-show", "false");
      slide.setAttribute("data-index", "1");
    } else if (isShow === "false" && slideIndex === "1") {
      slide.setAttribute("data-show", "false");
      slide.setAttribute("data-index", "-1");
    } else if (isShow === "false" && slideIndex === "-1") {
      slide.setAttribute("data-show", "true");
      slide.setAttribute("data-index", "0");
    }
  });
}

function showNextSlide() {
  slides.forEach((slide) => {
    const slideIndex = slide.getAttribute("data-index");
    const isShow = slide.getAttribute("data-show");
    if (isShow === "true" && slideIndex === "0") {
      slide.setAttribute("data-show", "false");
      slide.setAttribute("data-index", "-1");
    } else if (isShow === "false" && slideIndex === "1") {
      slide.setAttribute("data-show", "true");
      slide.setAttribute("data-index", "0");
    } else if (isShow === "false" && slideIndex === "-1") {
      slide.setAttribute("data-show", "false");
      slide.setAttribute("data-index", "1");
    }
  });
}

// Nav

const navLinks = document.querySelector(".nav-links");
const toggle = document.querySelector(".mobile-toggle");

toggle.addEventListener("click", () => {
  const isToggle = navLinks.getAttribute("aria-expanded");

  if (isToggle === "false") {
    navLinks.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-expanded", "true");
  } else {
    navLinks.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-expanded", "false");
  }
});
