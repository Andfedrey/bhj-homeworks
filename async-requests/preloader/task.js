let flagActive = true;
const items = document.querySelector('#items')
const loader = document.querySelector('.loader')
let info;

function getInfo(info) {
  loader.className = 'loader';
  const value = info.response.Valute;
  const arrValue = Object.values(value);
  console.log(arrValue);
  arrValue.forEach(el => {
    items.insertAdjacentHTML('afterbegin', `
    <div class="item">
      <div class="item__code">
        ${el.CharCode}: 
      </div>
      <div class="item__value">
        ${el.Value}
      </div>
      <div class="item__currency">
        ${el.Name}
      </div>
    </div>
    `)
  })
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true)
xhr.send()
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return
  }
  console.log('end');
  if (xhr.status === 200) {
    info = JSON.parse(xhr.responseText)
    getInfo(info)
  } else {
    console.log('error', xhr.responseText);
  }
}
