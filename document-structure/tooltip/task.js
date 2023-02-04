const hasTool = document.querySelectorAll('.has-tooltip');
const toolActive = document.querySelectorAll('.tooltip_active');
let activeFlag = true;

hasTool.forEach((el) => {
  el.onclick = (e) => {
    e.preventDefault();
    const target = e.target;
    const position = target.getBoundingClientRect();
    const positionTop = position.top;
    const positionLeft = position.left;
    
    if(activeFlag){
    
    target.insertAdjacentHTML('afterend',
      `
        <div class="tooltip tooltip_active" 
          style="left:${positionLeft}px;
          top:${positionTop}"px>
          ${e.target.title}
        </div>`);
      

    [...document.querySelectorAll('.tooltip')]
    .forEach(el => {
        if (el.textContent !== target.nextElementSibling.textContent) {
          el.remove();
        }
      }
      )
  }
})
