const tab = document.querySelectorAll('.tab');
console.log(tab, ' tab');
const tabContent = document.querySelectorAll('.tab__content')
console.log(tabContent, ' content');

function removeActive() {
  tab.forEach(el => {
    el.classList.remove('tab_active')
  })
  tabContent.forEach(el => {
    el.classList.remove('tab__content_active')
  })
}

tab.forEach((el, index) => el.onclick = () => {
  removeActive()
  el.classList.add('tab_active')
  tabContent[index].classList.toggle('tab__content_active')
})