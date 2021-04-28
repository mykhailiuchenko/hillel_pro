// "Попробывать" заполнить вот такой массив при помощи циклов: new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));
var array = new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));

for(let i = 0; i < array.length; i++) {
  array[i] = [];
  for(let j = 0; j < array.length; j++) {
      array[i][j] = 1;
  }
}
console.log(array);