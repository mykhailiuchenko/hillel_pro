// Адаптировать функцию assignObjects() под неопределенное количество объектов. assignObjects(obj1, obj2, ....., objn);

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
var person3 = {
  name: 'Alex',
  surname: 'Sidorov',
  age: 19,
  country: 'Ukraine'
};
function assignObjects() {
  var obj3 = {};
  var flag = typeof arguments[arguments.length - 1] === 'boolean' ? arguments[arguments.length - 1] : false;
  var argLength = arguments.length;
  for(var i = 0; i < argLength; i++) {
    if(flag) {
      gluingAnArray(obj3, arguments[i]);
    } else {
      reverseArgs.apply(null, arguments);
      gluingAnArray(obj3, arguments[i]);
    }
  }
  // if(flag) {
  //   for(var i = 0; i < argLength; i++) {
  //     gluingAnArray(obj3, arguments[i]);
  //   }
  // } else {
  //   for(var j = arguments.length-1; j >= 0; j--) {
  //     gluingAnArray(obj3, arguments[j]);
  //   }
  // }
  return obj3;
}
function gluingAnArray(obj1, obj2) {
  for(var attr in obj2) {
    obj1[attr] = obj2[attr];
  }
}
function reverseArgs() {
  for (let i = 0; i < Math.floor(arguments.length / 2) ; i++) {
    var swap = arguments[i];
    arguments[i] = arguments[arguments.length - i - 1];
    arguments[arguments.length - i - 1] = swap;
  }
  return arguments;
}
var test = assignObjects(person1, person2);
console.log(test);
var test1 = assignObjects(person1, person2, person3, true);
console.log(test1);
var test2 = assignObjects(person2, person3, person1, false);
console.log(test2);
