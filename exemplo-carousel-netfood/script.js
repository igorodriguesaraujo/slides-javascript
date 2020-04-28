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
  if (!count <= 0) {
    count--;
    let position = slides.clientWidth * count;
    parent.style.transform = `translateX(-${position}px)`;
  }
}

// Scale Image
function mouseScaleImage() {
  let current = slides.children;

  for (let i = 0; i <= current.length; i++) {

    let next = i + 1,
      previous = i - 1,
      scaleIn = "scale(1.3)",
      scaleOut = "scale(1)";

    current[i].addEventListener("mouseover", (event) => {
      if (i === 0) {
        event.currentTarget.style.transform = scaleIn;
        current[next].style.marginLeft = "38px";

      } else if (i >= current.length - 1) {
        event.currentTarget.style.transform = scaleIn;
        current[previous].style.marginRight = "43px";

      } else {
        current[previous].style.marginRight = "43px";
        event.currentTarget.style.transform = scaleIn;
        current[next].style.marginLeft = "38px";
      }
    })

    current[i].addEventListener("mouseleave", (event) => {
      if (i === 0) {
        event.currentTarget.style.transform = scaleOut;
        current[next].style.marginLeft = "";

      } else if (i >= current.length - 1) {
        event.currentTarget.style.transform = scaleOut;
        current[previous].style.marginRight = "5px";

      } else {
        current[previous].style.marginRight = "5px";
        event.currentTarget.style.transform = scaleOut;
        current[next].style.marginLeft = "";
      }

    })
  }
}

nextControl.addEventListener('click', nextSlide);
prevControl.addEventListener('click', prevSlide);

window.addEventListener("load", () => {
  mouseScaleImage()
});