// 2. Написать программу которая получит от 3ьох пользователя информацию возраст, имя, фамилию. Ввести информацию в таком виде:

let firstStudent = +prompt('Сколько Вам лет?') + ' лет ' + prompt('Введите Ваше имя:') + ' ' + prompt('Введите Вашу фамилию:');
let secondStudent = +prompt('Сколько Вам лет?') + ' лет ' + prompt('Введите Ваше имя:') + ' ' + prompt('Введите Вашу фамилию:');
let thirdStudent = +prompt('Сколько Вам лет?') + ' лет ' + prompt('Введите Ваше имя:') + ' ' + prompt('Введите Вашу фамилию:');
console.log('**************');
console.log('1. ' + firstStudent);
console.log('2. ' + secondStudent);
console.log('3. ' + thirdStudent);
console.log('-------------- Средний возраст студента: ' + ((parseInt(firstStudent) + parseInt(secondStudent) + parseInt(thirdStudent)) / 3) + ' --------------');
console.log('**************');
