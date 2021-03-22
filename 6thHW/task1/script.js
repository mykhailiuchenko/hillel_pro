// Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, есть в массиве элемент с заданным текстом или нет. 
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
// Функция должна возвращать true или false.
function inArray(text, array) {
  for(var i = 0; i < array.length; i ++) {
    var bool = false;
    if(text === array[i]) {
      return true;
    }
  }
  return bool;
}

var test = inArray('hello', ['svnj', 'hello', 'cvpoq']);
console.log(test);

var test2 = inArray('helo', ['svnj', 'hello', 'cvpoq']);
console.log(test2);