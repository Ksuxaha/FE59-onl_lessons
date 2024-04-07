"use strict";
 // Задача 1.
// Создать любой объект с двумя ключами и любыми значениями в них, а затем
// удалить ключи из объекта.
const user = {
    name:'Eva',
    age: 5,
}
console.log(user);
delete user.name;
delete user.age;
console.log(user);


//     Задача 2.
// Создать любой объект с двумя ключами и любыми значениями в них, а затем
// проверить есть ли в объекте определенный ключ и если есть вывести в
// консоль true .
const user1 = {
    name:'Eva',
    age: 5,
    city: `Warszawa`
}
console.log("city" in user1)

// Задача 3.
// Дан объект:
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// C помощью цикла for..in вывести в консоль сначала все ключи, потом
// значения ключей объект.
const student = {
        name: 'John',
        age: 19,
        isHappy: true
    };
for (let key in student){
    console.log(key, student [key]);
}


//     Задача 4.
// Дан объект:
//     const colors = {
//         'ru pum pu ru rum': {
//             red: 'красный',
//             green: 'зеленый',
//             blue: 'синий'
//         },
//     }
// Вывести в консоль слово красный и синий
  const colors = {
       'ru pum pu ru rum': {
           red: 'красный',
            green: 'зеленый',
            blue: 'синий'
       },
     }
console.log(colors[`ru pum pu ru rum`].red);
console.log(colors[`ru pum pu ru rum`].blue);



// Задача 5.
// Дан объект:
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         igor: 664,
//         alexandra: 199
//     }
// Вычислите среднюю зарплату сотрудников и результат поместите в
// соответствующую переменную

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
    }

    let totalSum = 0;
    let count = 0;

   for (let value in salaries) {
    totalSum += salaries[value];
    count++;
}
   const averageSum = totalSum /count;

console.log(averageSum);


// Задача 6.
// Создать валидатор, запросить у пользователя логин и пароль для регистрации.
//     Затем данные записать в объект.
// Потом попросить пользователя подтвердить данные. Если верно введен логин
// и пароль, вывести сообщение Добро пожаловать

const userInfo = {};

const login = prompt (`Enter login`);
const password = prompt (`Enter password`);

userInfo.login = login;
userInfo.password = password;

const loginConfirm = prompt (`Confirm login`);
const passwordConfirm = prompt (`Confirm password`);

if (loginConfirm === userInfo.login && passwordConfirm === userInfo.password) {
    console.log(`You are welcome`);
} else {
    console.log(`Error`);
}



//     Задача 2.
// Даны два одинаковых объекта. Сравните их так, чтобы они были равны.
//     let student1 = {
//     name: 'Polina',
//     age: 27,
// }
// let student2 = {
//     name: 'Polina',
//     age: 27,
// }
    let student1 = {
    name: 'Polina',
    age: 27,
};
let student2 = {
    name: 'Polina',
    age: 27,
};

const stringiObj1 = JSON.stringify(student1)
const stringiObj2 = JSON.stringify(student2)
console.log(typeof stringiObj1)

if (stringiObj1 === stringiObj2) {
    console.log("Объекты равны");
} else {
    console.log("Объекты не равны");
}





