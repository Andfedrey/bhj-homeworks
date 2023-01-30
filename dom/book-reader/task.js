const fontsCollection = document.querySelectorAll('.font-size');
const textColorCollection = document.querySelector('.book__control_color').querySelectorAll('.color')
const bgColorCollection = document.querySelector('.book__control_background').querySelectorAll('.color')
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

textColorCollection.forEach(el => {
  el.onclick = (event) => {
    event.preventDefault()
    const target = event.target
    target.classList.add('color_active')
    textColorCollection.forEach((e) => {
      if (e != target) {
        e.classList.remove('color_active')
      }
    })
    const textColor = target.dataset.textColor;

    if (textColor === 'black') {
      bookContent.classList.remove('book_color-whitesmoke')
      bookContent.classList.remove('book_color-gray')
      bookContent.classList.add('book_color-black')
    } else if (textColor === 'gray') {
      bookContent.classList.remove('book_color-whitesmoke')
      bookContent.classList.remove('book_color-black')
      bookContent.classList.add('book_color-gray')
    } else {
      bookContent.classList.remove('book_color-black')
      bookContent.classList.remove('book_color-gray')
      bookContent.classList.add('book_color-whitesmoke')
    }
  }
})


bgColorCollection.forEach(el => {
  el.onclick = (event) => {
    event.preventDefault()
    const target = event.target
    target.classList.add('color_active')
    bgColorCollection.forEach((e) => {
      if (e != target) {
        e.classList.remove('color_active')
      }
    })
    const bgColor = target.dataset.bgColor;
    if (bgColor === 'black') {
      bookContent.classList.remove('bg_color_gray')
      bookContent.classList.remove('bg_color_white')
      bookContent.classList.add('bg_color_black')
    } else if (bgColor === 'gray') {
      bookContent.classList.remove('bg_color_black')
      bookContent.classList.remove('bg_color_white')
      bookContent.classList.add('bg_color_gray')
    } else {
      bookContent.classList.remove('bg_color_gray')
      bookContent.classList.remove('bg_color_black')
      bookContent.classList.add('bg_color_white')
    }
  }
})