// Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. 
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
// Если - да, сделать математическое действие znak(которое описано в прототипе), 
// иначе - запросить ввод новых данных через метод input() класса SuperMath. 
// Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
// p = new SuperMath(); p.check(obj); // --> no p.input() -> 3 prompt -> считает

function SuperMath() {
  this.obj = obj;
  this.check = function() {
    const message = confirm('Хотите произвести действие znak с X и Y?');
    if(message) {
      this.action();
    } else {
      this.input();
    }
  }
}

SuperMath.prototype.action = function() {
  console.log(obj);
  switch(obj.znak) {
    case '+':
      console.log(obj.x + obj.y);
      return obj.x + obj.y;
    case '-':
      console.log(obj.x - obj.y);
      return obj.x - obj.y;
    case '*':
      console.log(obj.x * obj.y);
      return obj.x * obj.y;
    case '/':
      if(obj.y) {
        console.log(obj.x / obj.y);
        return obj.x / obj.y;
      } else {
        return Infinity;
      }
    case '%':
      console.log(obj.x % obj.y);
      return obj.x % obj.y;
  }
}

SuperMath.prototype.input = function() {
  obj.x = +prompt('Введите х: ');
  obj.y = +prompt('Введите y: ');
  obj.znak = prompt('Введите знак: ');
  if(operators[obj.znak]) {
    this.check(obj);
  }
}

const operators = {
  '+': () => {
    console.log('+');
    obj.znak = '+';
  },
  '-': () => {
    console.log('-');
    obj.znak = '-';
  },
  '*': () => {
    console.log('*');
    obj.znak = '*';
  },
  '/': () => {
    console.log('/');
    obj.znak = '/';
  },
  '%': () => {
    console.log('%');
    obj.znak = '%';
  }
}

const obj = {
  x: 12,
  y: 3,
  znak: '/'
}

let p = new SuperMath();
p.check(obj);
