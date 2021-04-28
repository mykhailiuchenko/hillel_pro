// Cоздать глобальную ф-ю greeting которая каждые 5000ms смотри в тег input с id='name' 
// (получить при помощи document.querySelector('input[id="name"]')) берет значение по ключу value 
// и выводит сообщение преведствия из глобальной переменной greetingMessage.
// alrt(greetingMessage + input.value)

var greetingMessage = 'Приветствую тебя, ';
var inputValue = document.querySelector('input[id="name"]');

function greeting(message) {
  console.log(message + this.value);
}

var greetingBind = greeting.bind(inputValue, greetingMessage);

setInterval(greetingBind, 5000);