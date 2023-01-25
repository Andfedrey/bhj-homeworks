const modal = document.getElementsByClassName('modal');
const plus = document.getElementsByClassName('modal__close');
const show = document.querySelector('.show-success')
modal[0].classList.add('modal_active')

show.onclick = () => {
  modal[0].classList.remove('modal_active')
  modal[1].classList.add('modal_active');
}
plus[0].onclick = () => {
  modal[0].classList.remove('modal_active')
};
plus[2].onclick = () => {
  modal[1].classList.remove('modal_active')
};

