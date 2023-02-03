const inputTask = document.querySelector('#task__input');
const addTask = document.querySelector('#tasks__add');
const taskForm = document.querySelector('#tasks__form');
const taskList = document.querySelector('#tasks__list');
let tasksStorage = [];
const data = JSON.parse(localStorage.getItem('tasks'))
let count = localStorage.getItem('count') ?? 0;

data?.forEach(el => {
  taskList.innerHTML += `
<div class="task" id=${el.name} >
  <div class="task__title">
    ${el.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
`})

inputTask.addEventListener('input', (e) => {
  value = e.target.value;
  localStorage.setItem('count', count);
})

addTask.onclick = (event) => {
  event.preventDefault();
  if (inputTask.value.length !== 0) {
    let itemId = `Task_${count}`
    tasksStorage.push({ name: itemId, value: inputTask.value })
    localStorage.setItem('tasks', JSON.stringify(tasksStorage));
    taskList.innerHTML += `
    <div class="task" id=${itemId} >
      <div class="task__title">
        ${inputTask.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
`
    count++;
    inputTask.value = '';
  }

  
  [...taskList.children]?.forEach(element => {
    let task = element.querySelector('.task__remove');
    task.onclick = ({ target }) => {
      localStorage.clear();
      target.parentElement.remove();
    }
  });
}

[...taskList.children]?.forEach(element => {
  let task = element.querySelector('.task__remove');
  task.onclick = ({ target }) => {
    // не находить элемент по id элемента, чтобы удалить из хранилища
    // console.log(target.parentElement);
    // localStorage.removeItem(target.parentElement.id);
    localStorage.clear();
    target.parentElement.remove();
  }
});



