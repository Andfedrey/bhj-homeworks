const timer = document.getElementById('timer')



const timerId = setInterval(() => {
  timer.textContent-- ;
  if(timer.textContent <= 0) {
    timer.textContent = 0;
    clearInterval(timerId);
    alert('Вы победили в конкурсе!');
  }
}, 1000, timer.textContent)



