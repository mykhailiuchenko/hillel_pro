// Пусть есть объект obj = {anonim: {say: 'Hello anonim'}, user: {say: 'Hello user'}, admin: {say: 'Hello admin'}}, 
// и ф-я: function greeting(role) {}
// obj.greeting('admin'); // 'Hello admin' obj.greeting('user'); // 'Hello user'

// при помощи метода call вызвать ф-ю greeting как метод объекта obj без записи в него, 
// с одним из 3ьох значений "anonim, admin, user". Получить в ответ сообщение приветствия.

var obj = {
  anonim: {say: 'Hello anonim'},
  user: {say: 'Hello user'}, 
  admin: {say: 'Hello admin'}
};

function greeting(role) {
    console.log(this[role].say);
}

greeting.call(obj, 'user');
greeting.call(obj, 'anonim');
greeting.call(obj, 'admin');
