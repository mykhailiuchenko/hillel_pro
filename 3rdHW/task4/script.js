//Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.

//Найти максимальное число и минимальное число.
//Элементы массива между min -- max записать в массив B.

let arrA = [];
let lenghtArr = +prompt('Введите число: ');
let arrB = [];

for(let i = 0; i < lenghtArr; i++) {
    arrA[i] = Math.round(Math.random() * 100);
}

let maxNum = arrA[0];
let minNum = arrA[0];
let minPos = 0;
let maxPos = 0;

for (let j = 0; j < arrA.length; j++) {
    if (arrA[j] > maxNum) {
        maxNum = arrA[j];
        maxPos = j;
    }

    if (arrA[j] < minNum) {
        minNum = arrA[j];
        minPos = j;
    }
}

console.log(maxNum, ' maxNum, ', maxPos, ' maxPos');
console.log(minNum, ' minNum, ', minPos, ' minPos');

if (maxPos < minPos) {
    let swap = maxPos;
    maxPos = minPos;
    minPos = swap;
}

for (let k = minPos+1; k < maxPos; k++) {
    arrB[arrB.length] = arrA[k];
}

console.log(arrA, ' arrA');
console.log(arrB, ' arrB');