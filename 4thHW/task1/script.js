// Создать двумерный массив, заполненный случайными числами в любом диапазоне.
// Найти колонку, где сумма элементов наименьшая.
// Найти колонку, где сумма элементов найбольшая.

let arr = [];
let arrLenght = +prompt('Введите число: ');
let minCol;
let maxCol;
let minColJ;
let maxColJ;

for(let row = 0; row < arrLenght; row++) {
    arr[row] = [];
    for(let column = 0; column < arrLenght; column++) {
        arr[row][column] = Math.round(Math.random() * 100);
    }
}
console.log(arr), 'arr';

for (let i = 0; i < arrLenght; i++) {
    for (var j = 0, sum = 0; j < arrLenght; j++) {
        sum += arr[j][i];    
    }
    console.log(sum);
    if (i === 0) {
        minCol = sum;
        maxCol = sum;
        minColJ = i;
    }
    if (sum >= maxCol) {
        maxCol = sum;
        maxColJ = i;
    } 
    if (minCol > sum) {
        minCol = sum;
        minColJ = i;
    }
}
console.log(maxCol, 'maxCol', minCol, 'minCol', maxColJ, 'maxColJ', minColJ, 'minColJ');
