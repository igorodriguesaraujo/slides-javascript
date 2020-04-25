
const slideWrapper = document.querySelector('#slide');
const nextControl = document.querySelector('#next');
const prevControl = document.querySelector('#prev');

let images = slideWrapper.querySelectorAll('img'),
  currentImage = 0,
  maxImage = images.length,
  time = 5000;

// Próximo slide
function nextSlide() {
  currentImage++;
  for (const image of images) {
    image.classList.remove('actived');
  }
  if (currentImage >= maxImage) {
    currentImage = 0;
  }
  images[currentImage].classList.add('actived');
}
// Slider Anterior
function prevSlide() {
  currentImage--;
  for (const image of images) {
    image.classList.remove('actived');
  }
  if (currentImage === -1) {
    currentImage = maxImage - 1;
  }
  images[currentImage].classList.add('actived');
}

// Eventos
nextControl.addEventListener('click', () => {
  nextSlide();
});

prevControl.addEventListener('click', () => {
  prevSlide();
});




