// напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.

//  var input = [1, 2, 3, 4, 5, 6];
//  function isEven(x) { return x % 2 == 0; } // проверяет на четность
//  console.log(filter(input, isEven)); // [2, 4, 6]

var input = [1, 2, 3, 4, 5, 6];
function filter(array, check) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    if(check(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
function isEven(x) {
  return x % 2 == 0;
}
console.log(filter(input, isEven));
