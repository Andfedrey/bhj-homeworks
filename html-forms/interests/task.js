const interests = document.querySelectorAll('.interest__check')
interests.forEach(el => {
  addEventListener('change', ({target}) => {
    target.checked = el
    const childrenUpdate = el.closest('li').querySelector('ul')?.querySelectorAll('input');
    childrenUpdate?.forEach(child => child.checked = el.checked )
  })

})

