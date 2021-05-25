// Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа). 
// При нажатии на Click - counter увеличивается. 
// При перезагрузке страницы counter должен сохраняться.

// Создать кнопку ClearCounters()

// Создать кнопку setCounter(), который запрашивает id блока и устанавливает значение( в типе number ) в counter.

window.onload = function () {
  const itemClear = document.querySelector('.clear-counters');
  const setCounter = document.querySelector('.set-counter');
  const newBlock = document.querySelector('.new-block');
  setValueFromLocalStorage();
  addClickCounter();

  newBlock.addEventListener('click', function () {
    document.body.insertAdjacentHTML("beforeEnd", '<div><span>0</span><button class="counter">Click</button></div>');
    setId();
    setValueFromLocalStorage();
    addClickCounter();
  });

  function setId () {
    const spanList = document.querySelectorAll('span');
    for (let i = 0; i < spanList.length; i++) {
      spanList[i].id = `${i}`;
    }
  };

  function addClickCounter () {
    const clickButtonsList = document.querySelectorAll('.counter');
    for (let i = 0; i < clickButtonsList.length; i++) {
      clickButtonsList[i].removeEventListener('click', clickCounter);
      clickButtonsList[i].addEventListener('click', clickCounter);
    }
  }

  function clickCounter () {  
    +this.previousSibling.innerHTML++;
    localStorage.setItem(this.previousSibling.id, this.previousSibling.innerHTML);
  }


  function setValueFromLocalStorage () {
    const spanList = document.querySelectorAll('span');
    
    for (let i = 0; i < spanList.length; i++) {
      if (localStorage.getItem(`${i}`)) {
        spanList[i].innerHTML = localStorage.getItem(`${i}`);
      }
    }
  };

  itemClear.addEventListener('click', function () {
    localStorage.clear();
    const spanList = document.querySelectorAll('span');

    for (let item of spanList) {
      item.innerHTML = '0';
    }
  });

  setCounter.addEventListener('click', function () {
    const spanList = document.querySelectorAll('span');

    let idSpan = '';

    do {
      idSpan = prompt('Введите номер блока');
    } while (((+idSpan) > 0 && (+idSpan) > spanList.length) || (!isFinite(idSpan)));

    let valueSpan = '';

    do {
      valueSpan = prompt('Введите значение счётчика');
    } while (!isFinite(valueSpan));

    let counter = document.querySelector(`#${idSpan}`);
    localStorage.setItem(`${idSpan}`, valueSpan);
    counter.innerHTML = valueSpan;
  });


  

}