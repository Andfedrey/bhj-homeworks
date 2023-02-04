const poolTitle = document.querySelector('#poll__title');
const poolAnswer = document.querySelector('#poll__answers')

function getStart(data){
  const arrData = Object.values(data)[1];
  poolTitle.textContent = arrData.title;
  arrData.answers.forEach(element => {
    poolAnswer.innerHTML += `
    <button class="poll__answer">
    ${element}
    </button>
    `
  });

  [...poolAnswer.children].forEach(el => 
      el.onclick = () => alert('Спасибо, ваш голос засчитан!')
    )
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return
  }
  console.log('end');
  if (xhr.status === 200) {
    getStart(JSON.parse(xhr.responseText))
  } else {
    console.log('error', xhr.responseText);
  }
}