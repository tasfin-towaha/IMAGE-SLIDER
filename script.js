const nextslide = document.querySelectorAll(".slide");
const dotSlide = document.querySelectorAll(".navDot");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentindex = 0;
let DotSlideIndex = 0;

function showSlide(index) {
  nextslide.forEach((slide) => slide.classList.remove("active"));
  nextslide[index].classList.add("active");
}

function showDot(index) {
  dotSlide.forEach((navDot) => navDot.classList.remove("active"));
  dotSlide[index].classList.add("active");
}

function nextBtnSlider() {
  if (currentindex < nextslide.length - 1) {
    currentindex++;
    showSlide(currentindex);
  }
}

function prevBtnSlider() {
  if (currentindex != 0) {
    currentindex--;
    showSlide(currentindex);
  }
}

dotSlide.forEach((dotSpan) => {
  dotSpan.addEventListener("click", function () {
    const dotindex = parseInt(dotSpan.dataset.slide);
    DotSlideIndex = dotindex;
    showDot(dotindex);
    showSlide(dotindex);
  });
});

function dotSlider() {
  if (DotSlideIndex < dotSlide.length - 1) {
    DotSlideIndex++;
    showDot(DotSlideIndex);
  } else {
    DotSlideIndex = 0;
  }
  showDot(DotSlideIndex);
  showSlide(DotSlideIndex);
}

nextBtn.addEventListener("click", nextBtnSlider);

prevBtn.addEventListener("click", prevBtnSlider);

dotSlide.addEventListener("click", nextBtnSlider);
