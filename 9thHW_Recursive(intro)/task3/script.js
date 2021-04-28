// Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!

function factorial(n) {
  if(n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

var test = factorial(5);
console.log(test);