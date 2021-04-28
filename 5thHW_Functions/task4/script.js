// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.

// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

function deleteSymbol(string, symbols) {
  string = string.split('');
  for(var i = 0; i < symbols.length; i++) {
    var index = string.indexOf(symbols[i]);
    if(index != -1) {
      string.splice(index, 1);
      i--;
    }
  }
  string = string.join('');
  return string;
 }
 var test = deleteSymbol('hello world', ['l', 'd']);
 console.log(test);
