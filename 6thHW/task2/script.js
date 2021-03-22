// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый, 
// который состоит из свойство обоих обьектов (склеить). 
// Если свойство повторяется, то взять значение второго обьекта
var person1 = {
  name: 'Ivan',
  surname: 'Petrov',
  age: 15,
  city: 'Odessa'
};
var person2 = {
  name: 'Petr',
  surname: 'Ivanov',
  age: 16
};
function assignObjects(obj1, obj2) {
  var obj3 = {};
  gluingAnArray(obj3, obj1);
  gluingAnArray(obj3, obj2);
  return obj3;
}
function gluingAnArray(obj1, obj2) {
  for(var attr in obj2) {
    obj1[attr] = obj2[attr];
  }
}
var test = assignObjects(person1, person2);
console.log(test);
