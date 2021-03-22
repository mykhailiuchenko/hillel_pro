// Написать рекурсивную функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6

function sumTo(n) {
  if(n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}
var test = sumTo(5);
console.log(test);