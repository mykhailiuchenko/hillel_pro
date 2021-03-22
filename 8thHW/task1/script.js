// 1)Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(), которая описана в window. 
// При вызове метода obj.renderObject() -> выводит в document всё содержимое объекта, кроме самого метода renderObject

//     obj => { x:10, y: 20 }
//     obj.renderObject() -> x:10, y: 20

var obj = {
  x: 10,
  y: 20,
  renderObject: renderObject
};
debugger;
function renderObject() {
  for(var attr in this) {
    if (attr !== 'renderObject') {
      console.log('obj.' + attr + " = " + this[attr]);
    }
  }
};

obj.renderObject();