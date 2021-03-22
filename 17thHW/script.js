// Реализовать калькулятор, в котором есть слайдер (input type=”range”) и поле ввода (input type=”number”).
// Изменяя состояние range меняется состояние поля ввода number. И наоборот.

// Реализовать блок-диаграмму, который в пикселях будет отображать значение range. 
// Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.

// Alt Text

// Красный блок - количество комиссии. Комиссия вычисляется по формуле:

// (range < 20) -> 2%
// (20 - 50)  -> 4%
// (50 - 75)  -> 6%
// (75 - 100)  -> 8%
// Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. 
// Результирующая сумма: 108. Высота красного блока - 8px


const range = document.querySelector('.range');
const number = document.querySelector('.number');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const count = document.querySelector('.count');
let commission = 0;

range.oninput = function() {
  number.value = range.value;
  green.style.height = range.value + 'px';
  countCommission();
  red.style.bottom = range.value + 'px';
  red.style.height = (range.value * commission) + 'px';
  count.innerHTML = (range.value * commission) + +range.value;
}

number.oninput = function() {
  range.value = number.value;
  if(number.value > 100) {
    number.value = 100;
  }
  green.style.height = number.value + 'px';
  countCommission();
  red.style.bottom = number.value + 'px';
  red.style.height = (number.value * commission) + 'px';
  count.innerHTML = (number.value * commission) + +number.value;
}

function countCommission() {
  if((range.value || number.value) < 20) {
    commission = 0.02;
  } else if((range.value || number.value) >= 20 && (range.value || number.value) < 50) {
    commission = 0.04;
  } else if((range.value || number.value) >= 50 && (range.value || number.value) < 75) {
    commission = 0.06;
  } else {
    commission = 0.08;
  }
}