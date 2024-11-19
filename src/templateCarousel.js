import './style.css';
import './carousel.css';

let currentSlideId = 0;
const carouselInner = document.querySelector('.carousel-inner');
const dots = document.querySelectorAll('.dot');

const changeActive = function (dot) {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dot.classList.add('active');
};

const next = function () {
  currentSlideId = (currentSlideId + 1) % 3;
  changeActive(dots[currentSlideId]);
  slideId(currentSlideId);
};

const previous = function () {
  currentSlideId = (((currentSlideId - 1) % 3) + 3) % 3;
  changeActive(dots[currentSlideId]);

  slideId(currentSlideId);
};

const slideId = function (i) {
  currentSlideId = i;
  const parentWidth = carouselInner.parentElement.offsetWidth;
  carouselInner.style.transform = `translateX(${-i * parentWidth}px)`;
};

// prevBtn = document.querySelector('#previous');
// nextBtn = document.querySelector('#next');

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
// carouselInner.style.transform = 'translateX(800px)'

dots.forEach((dot) => {
  dot.addEventListener('click', function () {
    currentSlideId = dot.getAttribute('data-slide');
    changeActive(dot);
    slideId(currentSlideId);
  });
});

setInterval(next, 5000);
