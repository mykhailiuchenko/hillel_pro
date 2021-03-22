// Написать методы push, join, reverse самостоятельно. Их функциональность должна соответствовать стандартным методам массивов.

// list.myPush(); list.myJoin(); list.myReverse();

// Например: var list = [1, 2, 3];

// function myPush() { ... }

// list.myPush = myPush;

// list.myPush();

var list = [1, 2, 3];



// -------------- push --------------

Array.prototype.myPush = function() {
  for(var i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
}

list.myPush(4, 5, 6, 7, 8);
console.log(list, 'after push');



// -------------- join --------------

Array.prototype.myJoin = function(sep = '') {
  var result = '';
  for(let i = 0; i < this.length - 1; i++) {
        result += this[i] + sep;
  }
  result += this[this.length - 1];
  return result;
}
var test = list.myJoin('');
console.log(test, '---------> separator ""');
var test2 = list.myJoin(',');
console.log(test2, '---------> separator ,');
var test3 = list.myJoin('+');
console.log(test3, '---------> separator +');



// -------------- reverse --------------

Array.prototype.myReverse = function() {  
  for(let i = 0; i < Math.floor(this.length / 2) ; i++) {
    var swap = this[i];
    this[i] = this[this.length - i - 1];
    this[this.length - i - 1] = swap;
  }
}

list.myReverse();
console.log(list, 'after reverse');