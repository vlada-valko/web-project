const sliderItem = [
  '<div class="slider__item">' +
    "<p>Amazon</p>" +
    '<img src="img/client-name-amazon.png" alt="amazon">' +
    "</div>",
  '<div class="slider__item">' +
    "<p>Dropbox</p>" +
    '<img src="img/client-name-dropbox.png" alt="dropbox">' +
    "</div>",
  '<div class="slider__item">' +
    "<p>Google</p>" +
    '<img src="img/client-name-google.png" alt="google">' +
    "</div>",
  '<div class="slider__item">' +
    "<p>Microsoft</p>" +
    '<img src="img/client-name-microsoft.png" alt="microsoft">' +
    "</div>",
];
const prevBtn = document.querySelector('.partners__left-arrow');
const nextBtn = document.querySelector('.partners__right-arrow');

let currentIndex = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".slider-line");
  slideContainer.innerHTML = sliderItem[currentIndex];
  if (window.matchMedia('(min-width:650px)').matches) {
    const secondSlideIdx = currentIndex + 1 >= sliderItem.length ? 0 : currentIndex + 1;
    slideContainer.innerHTML += sliderItem[secondSlideIdx];
    if (window.matchMedia('(min-width:980px)').matches) {
      const thirdSlideIdx = secondSlideIdx + 1 >= sliderItem.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += sliderItem[thirdSlideIdx];
    }
  }
}

window.addEventListener('resize', function() {
    renderSlide();
  });
  function nextSlide() {
  currentIndex = currentIndex + 1 >= sliderItem.length ? 0 : currentIndex + 1;
  renderSlide();
}
renderSlide();
function prevSlide() {
  currentIndex = currentIndex - 1 < 0 ? sliderItem.length - 1 : currentIndex - 1;
  renderSlide();
}

function goToSlide(index) {
  currentIndex = index;
  renderSlide();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

renderSlide();
