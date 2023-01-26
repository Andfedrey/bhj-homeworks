const dropDown = document.querySelector('.dropdown');
const dropList = document.querySelector('.dropdown__list')
const listName = document.querySelector('.dropdown__value')

dropDown.onclick = () => {
  dropList.classList.toggle('dropdown__list_active')
  dropList.onclick = (event) => {
    event.preventDefault();
    listName.textContent = event.target.textContent;
  }
}