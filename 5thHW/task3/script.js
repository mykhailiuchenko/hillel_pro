// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
// В переменной знак может быть: +, -, *, /, %, ^. 
// Вывести результат математического действия, указанного в переменной znak.

function doMath(x, znak, y) {
  switch(znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      if(y) {
        result = x / y;
      } else {
        result = Infinity;
      }
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = Math.pow(x, y)
      break;
  }
  return result;
}


var math1 = doMath(5, '+', 3);
var math2 = doMath(5, '-', 3);
var math3 = doMath(5, '*', 3);
var math4 = doMath(5, '/', 3);
var math5 = doMath(5, '%', 3);
var math6 = doMath(5, '^', 3);

console.log(math1);
console.log(math2);
console.log(math3);
console.log(math4);
console.log(math5);
console.log(math6);




