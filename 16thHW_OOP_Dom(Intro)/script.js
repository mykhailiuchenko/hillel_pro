// Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval.

let inputs = document.querySelectorAll('.input');
let textArea = document.querySelector('#textarea');


setInterval(() => {
  for(let i = 0; i < inputs.length; i++) {
    textArea.value += inputs[i].value + ', ';
 }
}, 3000);