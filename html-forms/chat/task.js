const viewChat = document.querySelector('.chat-widget__side-text');
const widget = document.querySelector('.chat-widget')
const chatInput = document.querySelector('.chat-widget__input')
const chatMessage = document.querySelector('#chat-widget__messages')
const wM = document.querySelector('.chat-widget__messages-container')

const date = new Date()
let messageTimeClient = `${date.getHours()}:${date.getMinutes()}`;
let messageFromClien = '';
let counter = 0;


const answerBotList = [
  'Вы не купили ни одного товара для того, чтобы с нами разговаривать',
  "Добрый день. Ваше сообщение никому не интерсно",
  "Мы ничего не будем вам продовать",
  "Оператор ушел на перерыв",
  "Пожалуйста, просто уйдите",
  "А другие покупатели сами разобрались",
  "Еще один. ЧТО?!",
  "Не пишите нам больше",
  "Все операторы не хотя с вами разговаривать",
  "Вы взрослый человек. Решайте свои проблемы сами",
  "Вам нужен доктор, а не консультант",
]

viewChat.addEventListener('click', () => {
  widget.classList.add('chat-widget_active');
  setInterval(() => {
    if (counter >= 30 && messageFromClien === '') {
      counter = 0;
      chatMessage.innerHTML += `
      <div class="message">
        <div class="message__time">${messageTimeClient}</div>
        <div class="message__text">${`Какой у вас вопрос?`}</div>
      </div>
      `
    }
    counter++
  }, 1000)
})

chatInput.addEventListener('input', (e) => {
  e.preventDefault();
  messageTimeClient = `${date.getHours()}:${date.getMinutes()}`;
  messageFromClien = `${e.target.value}`;
})

function random(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index]
}

chatInput.addEventListener('keyup', (e) => {
  if (e.code === 'Enter' && messageFromClien !== '') {
    chatMessage.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${messageTimeClient}</div>
      <div class="message__text">${messageFromClien}</div>
    </div>
  `
    chatInput.value = '';
    messageFromClien = ''

    chatMessage.innerHTML += `
    <div class="message">
      <div class="message__time">${messageTimeClient}</div>
      <div class="message__text">${random(answerBotList)}</div>
    </div>
    `
  }
  wM.scrollTop = wM.scrollHeight;
})



