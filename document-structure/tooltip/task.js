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
    console.log(position);
    if (activeFlag) {
      activeFlag = false;
      target.insertAdjacentHTML('afterend', `
      <div class="tooltip tooltip_active" 
      style="left:${positionLeft}px;
      top:${positionTop}"px>
      ${e.target.title}
      </div>`)
    } else {
      activeFlag = true;
      document.querySelector('.tooltip').remove()
    }
  }
})
