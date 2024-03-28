"use strict";

// Задача 1.
// Создайте переменные и присвойте им значения:
//     'true'  false  17 undefined  null
// Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.
const boolTrue = true;
const boolFalse = false;
const number = 17;
const und = undefined;
const nul = null;
console.log( typeof boolTrue);
console.log( typeof boolFalse);
console.log( typeof number);
console.log( typeof und);
console.log( typeof nul);


// Задача 2.
// Даны две переменные:
//     let height = 15
//     let width = 20
// С помощью условий выведите в консоль разработчика наибольшее число
    let height = 15;
    let width = 20;
    if (width >= height) {
        console.log(width);
    } else {
    console.log(height);
};

//
// Задача 3.
//     Написать перебор от 1 до 20, где выведутся все числа кратные трём.
//     Для вычисления кратности обратите внимание на оператор %
for (let i =1; i <=20; ++i) {
    if ( i % 3 === 0) {
        console.log(i);
    };
};

// Задача 4.
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны
// ключи документы и ручка, но из еды нам надо яблоко или апельсин. Для решения этой задачи
// нам помогут логические операторы || && .
// let key = true
// let documents = true
// let pen = true
// let apple = false
// let orange = true
// Ответ поместите в переменную shouldGoToWork
const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;
const shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

// Задача 5.
// Запросить у пользователя число:
//     1. Если число делится без остатка на 5 выводим сообщение Fiz
//     2. Если число делится без остатка на 3 выводим сообшение Buz
//     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz


let number5 = 25;
let number3 = 25;
let number3And5 = 25;
const yourNumber = prompt('Enter the number');
 if (yourNumber % 5 === 0 && yourNumber % 3 === 0) {
    alert('FizBuz');
} else if (yourNumber % 5 === 0) {
    alert('Fiz');
 } else if (yourNumber % 3 === 0) {
    alert('Buz');
 };


 // Задача 6.
// Написать программу, которая выполняет следующие операции:
//     Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей
// пивка .
//     Если меньше, то выводит сообщение - Пей колу .
//     Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить
// сигаретку, только маме не говори .


const yourAge = prompt ('Enter the age');
 if (yourAge == 16 || yourAge == 17 || yourAge == 18 ) {
    alert('Можешь выкурить сигаретку, только маме не говори');
} else if (yourAge < 18) {
    alert('Пей колу');
} else if (yourAge > 18) {
    alert('Попей пивка');
 };


//     Задача 7.
// Напишем программу для туристического терминала. Запросите у пользователя в какую
// сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль
// сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в
// консоль чтобы он попробовал еще раз.
//     юг на юг пойдешь счастье найдешь
// север на север пойдешь много денег найдешь
// запад на запад пойдешь верного друга найдешь
// восток на восток пойдешь разработчиком станешь
// Используйте конструкцию switch .
// const direction = prompt("В какую сторону света вы бы хотели отправиться? (север, юг, запад, восток)");


switch (direction) {
    case "север":
        alert("На север пойдешь - много денег найдешь");
        break;
    case "юг":
        alert("На юг пойдешь - счастье найдешь");
        break;
    case "запад":
        alert("На запад пойдешь - верного друга найдешь");
        break;
    case "восток":
        alert("На восток пойдешь - разработчиком станешь");
        break;
    default:
        alert("Вы ввели неверное направление. Попробуйте еще раз.");
};



//     Продвинутый уровень
//     Задача 1.
//     Пользователь решил повеселиться и ввел свое имя в таком в виде ‘пОлИнА нАбЕрЕжНаЯ’
// Исправьте эту ситуацию чтобы мы смогли корректно поприветствовать пользователя, и
//     поприветствуйте его через alert :
//         Привет, Полина Набережная!


const userFirstName =  `пОлИнА`;
const userLastName = `нАбЕрЕжНаЯ`;

const toLowerCaseUserFirstName = userFirstName.toLowerCase();
const toLowerCaseUserLastName = userLastName.toLowerCase();

const firstCharFirstName = toLowerCaseUserFirstName[0].toUpperCase();
const firstCharLastName = toLowerCaseUserLastName[0].toUpperCase();


const otherCharName = toLowerCaseUserFirstName.slice(1);
const otherCharLastName = toLowerCaseUserLastName.slice(1);

const allName = `${firstCharFirstName}${otherCharName} ${firstCharLastName}${otherCharLastName}`;
alert(`"Привет", ${allName}!`);


//         Задача 2.
//     Написать программу, которая выполняет следующие операции:
//         1. Запрашивает у пользователя число.
//     2. Последовательно задает вопрос: сколько отнять / прибавить / умножить / разделить от
//     предыдущего результата?
//         3. По окончании вывести пользователю alert , содержащий формулу и результат например:
//         ((((6 - 10) + 5) * 20) / 2 = 110)
let yourNum = Number(prompt(`Введите число`));
let minus = Number(prompt(`Cколько отнять?`));
let plus = Number(prompt(`Cколько прибавить?`));
let multiply =Number(prompt(`На сколько умножить?`));
let division =Number(prompt (`На сколько разделить?`));
let sum1 = (((yourNum - minus) + plus) * multiply) / division;
alert(`(((${yourNum} - ${minus}) + ${plus}) * ${multiply}) / ${division} = ${sum1} `);


//     Задача 3.
//     Написать программу, которая будет выводить в консоль лесенку.
// #
// ##
// ###
// ####
// #####
// ######

let symbol = "#";
for (let i = 1; i <= 6; ++i) {
    console.log(symbol.repeat(i));
};