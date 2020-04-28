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
}
// Scale Image
function scaleImage() {
  let image = slides.children;

  for (let i = 0; i <= image.length; i++) {
    image[i].addEventListener("mouseover", (event) => {
      if (i === 0) {
        event.currentTarget.style.transform = "scale(1.3)";
        image[i + 1].style.marginLeft = "38px";
      } else if (i >= image.length - 1) {
        event.currentTarget.style.transform = "scale(1.3)";
        image[i - 1].style.marginRight = "43px";
      } else {
        image[i - 1].style.marginRight = "43px";
        event.currentTarget.style.transform = "scale(1.3)";
        image[i + 1].style.marginLeft = "38px";
      }
    })

    image[i].addEventListener("mouseleave", (event) => {
      if (i === 0) {
        event.currentTarget.style.transform = "scale(1)";
        image[i + 1].style.marginLeft = "0px";
      } else if (i >= image.length - 1) {
        event.currentTarget.style.transform = "scale(1)";
        image[i - 1].style.marginRight = "5px";
      } else {
        image[i - 1].style.marginRight = "5px";
        event.currentTarget.style.transform = "scale(1)";
        image[i + 1].style.marginLeft = "0px";
      }

    })
  }
}

nextControl.addEventListener('click', nextSlide);
prevControl.addEventListener('click', prevSlide);

window.addEventListener("load", () => {
  scaleImage()
});