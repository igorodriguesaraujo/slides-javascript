const slides = document.querySelector('#slide');
const nextControl = document.querySelector('#nextControl');
const prevControl = document.querySelector('#prevControl');

let count = 0;
const parent = slides.parentElement;

function controlToggle(selector, count, limit, position) {
  if (count >= limit) {
    // selector.style.display = "none";
    parent.style.transform = `translateX(0px)`;
    count = 0;
  }
}

function nextSlide() {
  count++;

  let limit = Math.ceil(slides.scrollWidth / slides.clientWidth);
  let position = slides.clientWidth * count;

  parent.style.transform = `translateX(-${position}px)`;

  if (count >= limit) {
    // selector.style.display = "none";
    parent.style.transform = `translateX(0px)`;
    count = 0;
  }
  console.log("contador:", count);
}

function prevSlide() {
  console.log('Slide anterior');
}

nextControl.addEventListener('click', nextSlide);
prevControl.addEventListener('click', prevSlide);
