const fontsCollection = document.querySelectorAll('.font-size');
const bookContent = document.querySelector('.book__content');

fontsCollection.forEach(el => {
  el.onclick = (event) => {
    event.preventDefault()
    const target = event.target
    target.classList.add('font-size_active')
    const fontSize = target.dataset.size;
    fontsCollection.forEach((e) => {
      if (e != target) {
        e.classList.remove('font-size_active')
      }
    })

    if (fontSize === 'big') {
      bookContent.classList.add('book_fs-big')
    } else if (fontSize === 'small') {
      bookContent.classList.add('book_fs-small')
    } else {
      bookContent.className = 'book__content'
    }
  }
})