//Создать массив размерностью n, где n вводится с клавиатуры. Заполнить случайными числами в диапазоне -220 ... 435. Вывести в документ числа, которые состоят из двух цифр.

let arr = [];
let arrLenght = +prompt('Введите число: ');

let max = 435, min = -220;

for(let i = 0; i < arrLenght; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);

    if((arr[i] >= 10 && arr[i] < 100) || (arr[i] <= -10 && arr[i] > -100)) {
        console.log(arr[i]);
    }
}

console.log(arr);