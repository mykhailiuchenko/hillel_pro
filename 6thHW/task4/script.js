// В задачу п.3, сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.

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
  flag = flag || false;
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
var test2 = assignObjects(person1, person2);
console.log(test2);