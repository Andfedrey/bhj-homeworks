const inputTask = document.querySelector('#task__input');
const addTask = document.querySelector('#tasks__add');
const taskForm = document.querySelector('#tasks__form');
const taskList = document.querySelector('#tasks__list');
let count = 0;
let data = JSON.parse(localStorage.getItem('tasks'));

function getNewTask(id, value) {
  return taskList.innerHTML += `
  <div class="task" id= '1' >
    <div class="task__title">
      ${value.trim()}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>
`
}

function clearingTask() {
  return document.querySelectorAll('.task').forEach(el => {
    el.onclick = ({ target }) => {
      if (target.className === 'task__remove') {
        console.log(target.parentElement);
        target.parentElement.remove();
        let allTask = document.querySelectorAll('.task__title');
        let t = [...allTask].map(el => el.textContent.trim())
        localStorage.setItem('tasks', JSON.stringify(t));
      }
    }
  })
}

data?.forEach(el => {
  getNewTask(1, el)
})

inputTask.addEventListener('input', (e) => {
  value = e.target.value;
  let allTask = document.querySelectorAll('.task__title');
  let t = [...allTask].map(el => el.textContent.trim())
  localStorage.setItem('tasks', JSON.stringify(t));
})

addTask.onclick = (event) => {
  event.preventDefault();
  if (inputTask.value !== '') {
    let itemId = `Task_${count}`
    getNewTask(itemId, inputTask.value);
    count++;
    inputTask.value = '';
  }

  clearingTask()
}

clearingTask()