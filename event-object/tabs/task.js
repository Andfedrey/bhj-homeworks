const tab = document.querySelectorAll('.tab');
console.log(tab, ' tab');
const tabContent = document.querySelectorAll('.tab__content')
console.log(tabContent, ' content');

tab.forEach((el, index) => el.onclick = (event) => {
  let current = event.target
  tab.forEach(e => {
    if (e !== current){
      e.classList.remove('tab_active')
    
    }
  })
  el.classList.add('tab_active')
  tabContent[index].classList.toggle('tab__content_active')
})