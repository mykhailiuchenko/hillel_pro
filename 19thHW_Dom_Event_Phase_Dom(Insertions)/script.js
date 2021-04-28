// Сверстать таблицу 5х5 с любым текстовых содержимым заранее заполненным.

// При клике на любую ячейку таблицы появляется внутри ячейке многострочное текстовое поле 
// с текстом который был в ячейке(на которую нажали) и две кнопки save, cancel save -- сохранить 
// в текущей ячейке введенные данные, cancel -- оставит все без изменений как было раньше.

// P.S. обязательно использовать делегирование события + поведение.

const table = document.querySelector('.table');

let tableData;


function click(event) {
  const target = event.target;
  if(target.className == 'table-data') {
    if(tableData) return;
    makeEditTD(target);
  } else if(target.className == 'save') {
    save(tableData.cell);
    tableData = null;
  } else if(target.className == 'cancel') {
    cancel(tableData.cell);
    tableData = null;
  }
}

function save(td) {
  td.innerHTML = td.firstChild.value;
}

function cancel(td) {
  td.innerHTML = tableData.data;
}

function makeEditTD(td) {
  const textArea = document.createElement('textarea');
  tableData = {
    cell: td,
    data: td.innerHTML
  }
  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.append(textArea);
  textArea.focus();
  td.insertAdjacentHTML("beforeEnd", '<button class="save">Save</button><button class="cancel">Cancel</button>');
}
table.addEventListener('click', click);
