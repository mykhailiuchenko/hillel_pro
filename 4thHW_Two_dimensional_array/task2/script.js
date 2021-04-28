// В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6 и тд
// Если массив непарный - последний элемент не трогать.

// было 1 2 3 4 5 6, 7, должно стать: 2 1 4 3 6 5, 7

var arr =[];
var arrLenght = +prompt('Введите число: ');

for (var i = 0; i < arrLenght; i++) {
  arr[i] = Math.round(Math.random() * 10);
}
console.log(arr);

for (var j = 0, swap = 0; j < arrLenght - 1; j++) {
  swap = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = swap;
  j++;
}
console.log(arr);