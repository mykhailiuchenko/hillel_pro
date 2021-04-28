// Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа). 
// При нажатии на Click - counter увеличивается. 
// При перезагрузке страницы counter должен сохраняться.

// Создать кнопку ClearCounters()

// Создать кнопку setCounter(), который запрашивает id блока и устанавливает значение( в типе number ) в counter.

const createElement = document.querySelector('.create-element');
const element = document.querySelector('.element');
const counter = document.querySelector('.counter');

createElement.addEventListener('click', function() {
  document.body.insertAdjacentHTML('beforeEnd', '<div class="element"><span class="counter">0</span></div>');
});

counter.onclick(function() {
  counter.value = counter.innerHTML + 1;
})

