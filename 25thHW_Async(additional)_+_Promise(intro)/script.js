// Используя цепочку Promise согласно таблицы http://prntscr.com/oxzs7j.
// Организовать вывод в консоль такой порядок цифр " 0 1 3 6 8 9 12 ", " 0 2 3 6 7 9 12". 
// Где 0 - это значение которое выводится в сallback - ф-ии которая передается в Promise.



function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const promise = new Promise((resolve, reject) => {
  console.log(0)

  const id = random(1, 100);

  if (id % 2 === 0) {
      resolve(id);
  } else {
      reject(id);
  }
})

.then((id) => {
  console.log(1);
  return id;
},
(id) => {
  console.log(2);
  return id;
})

.then((id) => {
  console.log(3);
  return Promise.reject(id);
},
() => {
  console.log(4);
})

.then(() => {
  console.log(5);
}, 
(id) => {
  console.log(6);
  if(id % 2 === 0) {
    throw Error();
  } 
})

.then(() => {
  console.log(7);
}, 
() => {
  console.log(8);
})

.then(() => {
  console.log(9);
  throw Error();
}, 
() => {
  console.log(10);
})

.then(() => {
  console.log(11);
}, 
() => {
  console.log(12);
});