let slideWrapper = document.querySelector('#slide'),
  images = slideWrapper.querySelectorAll('img'),
  currentImage = 0,
  maxImage = images.length,
  time = 5000;

function nextSlide() {
  images[currentImage].classList.remove('actived');

  currentImage++;
  if (currentImage >= maxImage) {
    currentImage = 0;
  }
  images[currentImage].classList.add('actived');
}

function initSlide() {
  setInterval(() => {
    nextSlide();
  }, time);
}

window.addEventListener('load', initSlide);





