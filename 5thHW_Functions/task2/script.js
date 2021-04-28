//написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
//Тот массив, сумма которого большая - должен вернутся функцией.

function arrCreation(arrLenght) {
  var arr = [];
  for(var i = 0; i < arrLenght; i++) {
    arr[i] = Math.round(Math.random() * 100);
  }
  return arr;
}
var firstArray = arrCreation(+prompt('Введите число: '));
var secondArray = arrCreation(+prompt('Введите число: '));

function sum(array) {
  var arrSum = 0;
  array.forEach(element => {
    if(Number.isInteger(element)){
      arrSum += element;
    }
  });
  return arrSum;
}
function maxValueArray(array1, array2) {   
  var sumFirstArray = sum(array1);
  var sumSecondArray = sum(array2);

  if(sumFirstArray > sumSecondArray) {
    return array1;
  } else {
    return array2;
  }
}
var mxVaAr = maxValueArray(firstArray, secondArray);
console.log(mxVaAr);
var test = maxValueArray([123, 10, 1, 'ar', 'asdasd', 1, 1], secondArray);
console.log(test);