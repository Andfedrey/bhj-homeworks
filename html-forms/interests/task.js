const interests = document.querySelectorAll('.interest__check')

function getCheckedUpdate(info, arr) {
  return info ? arr?.forEach(el => el.checked = true) : arr?.forEach(el => el.checked = false)
}

addEventListener('change', ({ target }) => {
  const childrenUpdate = target.closest('.interest').children[1]?.querySelectorAll('.interest__check');
  getCheckedUpdate(target.checked, childrenUpdate)
})

