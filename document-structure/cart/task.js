const cart = document.querySelector('.cart__products');
const addProduct = document.querySelectorAll('.product__add');
const min = document.querySelectorAll('.product__quantity-control_dec');
const plus = document.querySelectorAll('.product__quantity-control_inc');

min.forEach(el => {
  el.onclick = ({ target }) => {
    target.nextElementSibling.textContent > 0 ? target.nextElementSibling.textContent-- : 0
  }
})

plus.forEach(el => {
  el.onclick = ({ target }) => {
    target.previousElementSibling.textContent++
  }
})

addProduct.forEach(el => {
  el.onclick = ({ target }) => {
    let parentTarget = target.closest('.product');
    let img = parentTarget.querySelector('.product__image').src;
    let count = parentTarget.querySelector('.product__quantity-value').textContent.trim();
    let dataId = parentTarget.dataset.id;
    let checkId = document.getElementById(`${dataId}`)
    if (count > 0 && checkId === null) {
      cart.innerHTML += `
      <div class="cart__product" id=${dataId}>
      <img class="cart__product-image" src=${img}>
      <div class="cart__product-count">${count}</div>
      </div>
      `
    } else if (count > 0 && checkId !== null) {
      //Можно это как то более элегантно написать?
      let a = checkId.querySelector('.cart__product-count').innerHTML;
      let sum = +a + +count;
      checkId.querySelector('.cart__product-count').innerHTML = sum
    }
  }
})