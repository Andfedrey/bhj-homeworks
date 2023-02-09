const control = document.querySelectorAll('.control');
const form = document.getElementById('signin__form');
const welcomeUser = document.querySelector('.welcome');
const xhr = new XMLHttpRequest();

function sendData(payload) {
  xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/auth')
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.responseType = 'json'
  xhr.send(JSON.stringify(payload));
}

xhr.onload = function() {
    welcomeUser.classList.add('welcome_active')
    let resposeObj = xhr.response;
    document.getElementById('user_id').outerText = resposeObj.user_id;
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



