// Создать контекстное меню при клике(event=contextmenu) на любое место в документе. Использую модель данных ниже(data):

//  data = { 
//  	name: 'menu', 
//  	items: [
//  		{
//  			title: 'title 1',
//  			handler: 'ActionCopy'
//  		},
//  		{
//  			title: 'title 2',
//  			handler: 'ActionSaveAs'
//  		},
//  		{
//  			title: 'title 3',
//  			handler: 'ActionExit' // названия метода из actions,
//  		}
//  	]
//  }
// Меотоды обработчиков событий хранить в объекте actions.

// Кликая(onclick) по пунктам меню(задание #1), вызываются метод из объекта actions (использовать своство handler) .

// actions = { actionCopy: function(){}, actionSaveAs: function(){}, actionExit: function() {} }

const actions = { 
  actionCopy() {
    console.log('copy');
  }, 
  actionSaveAs() {
    console.log('save');
  }, 
  actionExit() {
    console.log('exit');
  } 
}

const data = { 
  name: 'menu', 
  items: [
    {
      title: 'Copy',
      handler: 'actionCopy'
    },
    {
      title: 'Save As',
      handler: 'actionSaveAs'
    },
    {
      title: 'Exit',
      handler: 'actionExit'
    }
  ]
}

function ContextMenuComponent(model = {}, actions = {}) {
  this.model = model;
  this.actions = actions;
}

ContextMenuComponent.prototype.makeContainer = function() {
  const ul = document.createElement('ul');
  ul.classList.add('navigation');

  return ul;
};

ContextMenuComponent.prototype.makeButtons = function() {
  const { items } = this.model;
  const fragment = document.createDocumentFragment();

  for(let i = 0; i < items.length; i++) {
      const li = document.createElement('li');
      const { handler, title} = items[i];

      li.addEventListener('click', actions[handler]);
      li.classList.add('navigation__item', 'navigation__button');
      li.innerHTML = title;

      fragment.append(li);
  }

  return fragment;
};

ContextMenuComponent.prototype.makeMenu = function(e) {
  const container = this.makeContainer();
  const menuButtons = this.makeButtons();

  container.append(menuButtons);
  container.style.display = 'block';
  container.style.left = e.clientX + 'px';
  container.style.top = (e.clientY - 15) + 'px';
  document.body.append(container);
}



window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  const menu = new ContextMenuComponent(data, actions);
  const hidden = document.querySelector('.navigation');
  if(hidden === null) {
    menu.makeMenu(e);
  }
  
});

window.addEventListener('click', function (e) {
  const menu = document.querySelector('.navigation');
  if(menu !== null) {
    menu.remove();
  }
});

