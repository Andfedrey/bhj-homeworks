const p = document.querySelector('#progress');
const formId = document.getElementById('form');

function handleEvent(e) {
  const loader = e.loaded / e.total;
  p.value += loader
}

formId.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open(
    'POST', 
    'https://students.netoservices.ru/nestjs-backend/upload'
  );
  xhr.upload.addEventListener('progress', handleEvent)
  const formData = new FormData(formId);
  xhr.send(formData);
})

