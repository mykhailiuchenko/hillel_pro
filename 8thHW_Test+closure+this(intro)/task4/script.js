// В метод addRecord добавляется последний необязательный аргумент flag,
//  который указывает приоритет присвоения свойств с одинаковым названием. 
// Если true - берется свойство из первоначального объекта this, если false - берется свойство из arguments.
//  По умолчанию flag = false;

data = {
  addRecord: function() {
    var argLength = arguments.length;
    var flag = typeof arguments[arguments.length - 1] === 'boolean' ? true : false;
      for(var i = 0; i < argLength; i++) {
      for(var key in arguments[i]) {
        if(flag) {
          this[key] = this[key] === undefined ? arguments[i][key] : this[key];
        } else {
          this[key] = arguments[i][key];
        }
      }
    }
  },
  p: 600,
  str: 'hello',
  y: -50
}
var test = data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, true);
console.log(data);
var test2 = data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
console.log(test2);
