// Cоздать конвертер-функцию которая получает на вход массив вида:
// mass = [ [1,2,3, [3.1] ], 4, [ 5, 6, [7, 8, [9, 10, 15]]] ];

// а на выходе получим переобразованый массив: [1 ,2, 3, 3.1, 4, 5, 6, 7, 8, 9, 10, 15]

var mass = [ [1,2,3, [3.1] ], 4, [ 5, 6, [7, 8, [9, 10, 15]]] ];
var newArray = [];

function arrayDeepFiller(arr) {

  for(var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) { 
        arrayDeepFiller(arr[i]);
      } else {
        newArray.push(arr[i]);
      }
  }
  return newArray;
}

var test = arrayDeepFiller(mass)
console.log(test);
