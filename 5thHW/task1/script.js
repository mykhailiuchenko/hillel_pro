// Написать функцию заполнения массива. Имя произвольное.

function arrCreation(arrLenght) {
  var arr = [];
  for(var i = 0; i < arrLenght; i++) {
    arr[i] = Math.round(Math.random() * 100);
  }
  return arr;
}
var arrayCreate = arrCreation(+prompt('Введите число: '));
console.log(arrayCreate);