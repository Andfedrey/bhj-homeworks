const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');
const sliderImg = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot')
let count = 0;

function toCleanActive() {
  sliderImg.forEach(el => {
    el.classList.remove('slider__item_active')
  })
  sliderDots.forEach(el => {
    el.classList.remove('slider__dot_active')
  })
}

sliderDots.forEach((el, index) => el.onclick = () => {
  toCleanActive()
  el.classList.add('slider__dot_active');
  sliderImg[index].classList.add('slider__item_active')
})

right.onclick = () => {
  toCleanActive()
  count < sliderImg.length - 1 ? count++ : count = 0
  sliderImg[count].classList.add('slider__item_active')
  sliderDots[count].classList.add('slider__dot_active')
}

left.onclick = () => {
  toCleanActive();
  count > 0 ? count-- : count = sliderImg.length - 1;
  sliderImg[count].classList.add('slider__item_active')
  sliderDots[count].classList.add('slider__dot_active')
}