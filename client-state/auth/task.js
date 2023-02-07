const control = document.querySelectorAll('.control');
const form = document.getElementById('signin__form');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const xhr = new XMLHttpRequest();
  let info;

  control.forEach((el) => {
    info = { ...info, [el.name]: el.value }
  })

  xhr.open("POST", " https://students.netoservices.ru/nestjs-backend/auth")
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(JSON.stringify(info));
  checkRequest(xhr)
})

function checkRequest(req) {
  if (req.status >= 200 ) {
    document.querySelector('#signin').className = 'signin';
  } else {
    alert('Неверный логин/пароль')
  }
}