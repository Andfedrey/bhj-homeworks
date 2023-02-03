const hasTool = document.querySelectorAll('.has-tooltip');
const toolActive = document.querySelectorAll('.tooltip_active');
hasTool.forEach((el) => {
  el.onclick = (e) => {
    e.preventDefault();
    const target = e.target;
    target.insertAdjacentHTML('beforeend', `
    <div class="tooltip tooltip_active" style="left: 0; top: 0">
    ${e.target.title}
    </div>`)
    hasTool.forEach(t => {
      if(t !== target) {
        t.querySelector('.tooltip')?.remove();
      }
    })
  }
})
