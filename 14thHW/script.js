// Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. 
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
// Если - да, сделать математическое действие znak(которое описано в прототипе), 
// иначе - запросить ввод новых данных через метод input() класса SuperMath. 
// Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
// p = new SuperMath(); p.check(obj); // --> no p.input() -> 3 prompt -> считает

function SuperMath(obj) {
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
  switch(this.znak) {
    case '+':
      console.log(this.x + this.y);
      return this.x + this.y;
    case '-':
      console.log(this.x - this.y);
      return this.x - this.y;
    case '*':
      console.log(this.x * this.y);
      return this.x * this.y;
    case '/':
      if(this.y) {
        console.log(this.x / this.y);
        return this.x / this.y;
      } else {
        return Infinity;
      }
    case '%':
      console.log(this.x % this.y);
      return this.x % this.y;
  }
}

SuperMath.prototype.input = function() {
  const arr = ['+', '-', '*', '/', '%'];
  this.x = +prompt('Введите х: ');
  this.y = +prompt('Введите y: ');
  
  do {
    this.znak = prompt('Введите знак: ');
  } while(this.znak !== arr[i]);
}


let obj = {
  x: 12,
  y: 3,
  znak: '/'
}

let p = new SuperMath();
p.check(obj);