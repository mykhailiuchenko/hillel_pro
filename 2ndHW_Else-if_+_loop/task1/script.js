// 1. Реализовать скрипт согласно схеме:

let role = prompt('Введите Логин: ');
let password;

if (role == null) {
    alert('Вход отменен');
} else  if (role === 'Admin') {
    password = prompt('Введите Пароль: ');
    if (password == null) {
        alert('Вход отменен');
    } else  if (password === 'Черный Властелин') {
        alert('Добро пожаловать!');
    } else {
        alert("Пароль неверен");
    }
} else {
    alert("Я Вас не знаю");
}
