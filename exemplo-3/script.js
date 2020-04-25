
const slideWrapper = document.querySelector('#slide');
const nextControl = document.querySelector('#next');
const prevControl = document.querySelector('#prev');

let images = slideWrapper.querySelectorAll('img'),
  currentImage = 0,
  maxImage = images.length,
  time = 5000;

//Desabilitar Navegação
function disableControl(target) {
  target.setAttribute('disabled', 'disabled');
  target.style.opacity = .4;
}

//Habilitar Navegação 
function enableControl(target) {
  target.removeAttribute('disabled');
  target.style.opacity = 1;
}

// Próximo slide
function nextSlide() {
  enableControl(prevControl);
  if (currentImage >= maxImage - 1) {
    disableControl(nextControl);
  } else {
    currentImage++;
    for (const image of images) {
      image.classList.remove('actived');
    }
    images[currentImage].classList.add('actived');
  }
}

// Slider Anterior
function prevSlide() {
  enableControl(nextControl);
  if (currentImage <= 0) {
    disableControl(prevControl);
    currentImage = 0;
  } else {
    currentImage--;
    for (const image of images) {
      image.classList.remove('actived');
    }
    images[currentImage].classList.add('actived');
  }
}

// Eventos
nextControl.addEventListener('click', nextSlide);
prevControl.addEventListener('click', prevSlide);




