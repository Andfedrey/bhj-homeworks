const rotators = document.querySelectorAll('.rotator__case')
let counter = 0;

setInterval(() => {
  if(rotators.length > counter) {
    counter - 1 >= 0 ? rotators[counter - 1].classList.remove('rotator__case_active') : rotators[rotators.length - 1].classList.remove('rotator__case_active')
    rotators[counter].classList.add('rotator__case_active')
    counter++;
  } else {
    counter = 0;
  }
}, 1000)