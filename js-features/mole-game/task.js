const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const counter = (a, b) => {
  if(a > 10) {
    dead.textContent = 0;
    lost.textContent = 0;
    alert('вы выиграли!!!')
  }
  if(b > 5) {
    dead.textContent = 0;
    lost.textContent = 0;
    alert('вы проиграли!!!')
  }
}

const punch = document.addEventListener('click', (event) => {
  const choice = event.target;
  choice.className.includes('hole_has-mole') ? dead.textContent++ : lost.textContent++
  counter(dead.textContent, lost.textContent)
})


