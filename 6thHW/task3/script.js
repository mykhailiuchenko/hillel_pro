// В задачу п.2 добавить 3ий аргумента flag, который является boolean. 
// Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.

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
function assignObjects(obj1, obj2, flag) {
  var obj3 = {};
  if(flag) {
    gluingAnArray(obj3, obj1);
    gluingAnArray(obj3, obj2);
  } else {
    gluingAnArray(obj3, obj2);
    gluingAnArray(obj3, obj1);
  }
  return obj3;
}
function gluingAnArray(obj1, obj2) {
  for(var attr in obj2) {
    obj1[attr] = obj2[attr];
  }
}
var test = assignObjects(person1, person2, true);
console.log(test);
var test1 = assignObjects(person1, person2, false);
console.log(test1);