//Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. 
//Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив.

let arr = [];
let arrLenght = +prompt('Введите число: ');

for(let i = 0; i < arrLenght; i++) {
    arr[i] = Math.round(Math.random() * 10);
}
console.log(arr);


for (let j = 0; j < Math.floor(arr.length / 2) ; j++) {
    var swap = arr[j];
    arr[j] = arr[arr.length - j - 1];
    arr[arr.length - j - 1] = swap;
}
console.log(arr);
