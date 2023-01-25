const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');
const sliderImg = document.querySelectorAll('.slider__item');
let count = 0;

function toCleanActive() {
  sliderImg.forEach(el => {
    if (el.className.includes('slider__item_active')) {
      el.classList.remove('slider__item_active')
    }
  }
)}

right.onclick = () => {
  toCleanActive()
  count++
  count < sliderImg.length ? count++ : count = 0
  sliderImg[count].classList.add('slider__item_active')
}

left.onclick = () => {
  toCleanActive();
  count--
  count >= 0 ? count-- : count = sliderImg.length - 1;
  sliderImg[count].classList.add('slider__item_active')
}