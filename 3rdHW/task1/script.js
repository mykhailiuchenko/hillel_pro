//1.1 Ораганизовать перебор чисел от 1 до 150. 1.2 Посчитать сумму всех чисел 1.3 Посчитать сумму чётных чисел

let array = [];
let number = 150;
let summ = 0;
let even = 0;

for(let i = 0; i <= number; i++) {
    array[i] = i; // 1.1

    summ += i;  // 1.2
    
    if (i % 2 === 0) {  // 1.3
        even += i;
    }
}

console.log(array);
console.log(summ);
console.log(even);