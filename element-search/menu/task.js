const menuItem = document.querySelectorAll('.menu__item')
const menu = document.querySelectorAll('.menu')

menuItem.forEach((el) => {
  el.onclick = (event) => {
    let choiceList = event.currentTarget;
    let dropList = choiceList.closest('.menu__item').querySelector('.menu');
    if(dropList){
      event.preventDefault();
      dropList.classList.toggle('menu_active'); 
      dropList.onclick = (e) => {
        e.stopPropagation();
      }    
    }
    
  }
})