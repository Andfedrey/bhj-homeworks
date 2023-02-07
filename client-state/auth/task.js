const control = document.querySelectorAll('.control');
const form = document.getElementById('signin__form');

function sendData(payload) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/auth')
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(JSON.stringify(payload));
}

function formSend(event) {
  event.preventDefault()
  let info;
  control.forEach((el) => {
    info = { ...info, [el.name]: el.value }
  })
  sendData(info)
}

form.addEventListener('submit', formSend)




