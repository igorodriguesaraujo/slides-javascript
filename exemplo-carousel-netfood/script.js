const slides = document.querySelector('#slide');
const nextControl = document.querySelector('#nextControl');
const prevControl = document.querySelector('#prevControl');
const parent = slides.parentElement;

let count = 0;
let limit = Math.ceil(slides.scrollWidth / slides.clientWidth);

// Next Slide
function nextSlide() {
  count++;
  let position = slides.clientWidth * count;

  parent.style.transform = `translateX(-${position}px)`;

  if (count >= limit) {
    parent.style.transform = `translateX(0px)`;
    count = 0;
  }
  console.log("contador:", count)
}

// Previous Slide
function prevSlide() {
  if (count <= 0) {
    console.log('Estamos no inicio')
  } else {
    count--;
    let position = slides.clientWidth * count;
    parent.style.transform = `translateX(-${position}px)`;
  }
  console.log("contador:", count <= 0)

}

nextControl.addEventListener('click', nextSlide);
prevControl.addEventListener('click', prevSlide);
