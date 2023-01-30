const reveal = document.querySelectorAll('.reveal')

const isInViewPort = function (el) {
  return el.getBoundingClientRect().top - window.innerHeight;
}

window.addEventListener('scroll', () => {
  reveal.forEach(el => {
    if (isInViewPort(el) <= 0) {
      el.classList.add('reveal_active')
      if (isInViewPort(el) < -2000) {
        el.classList.remove('reveal_active')
      }
    }
  })
})
