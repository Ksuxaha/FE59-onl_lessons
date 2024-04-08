"use strict";

// Задача 1.
// Дан массив:
//     const colors = ['red', 'green', 'blue']
// Выведите в консоль его длину.
const colors = ['red', 'green', 'blue']
console.log(colors.length);


//     Задача 2.
// Дан массив:
//     const animals = ['monkey', 'dog', 'cat']
// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat']
console.log(animals.at(-1));
//     Задача 3.
// Дан массив:
//     const numbers = [5, 43, 63, 23, 90]
// Удалите все элементы в массиве и выведите в консоль полученный результат.
//     Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90];


//     Задача 4.
// Дан массив:
//     const students = ['Polina', 'Dasha', 'Masha']
// Удалите последний элемент массива, затем вместо него добавьте в массив
// студента Borya .
//     Удалите первый элемент массива, затем вместо него добавьте в массив
// студента Andrey .
//     Полученный результат не забудьте вывести в консоль.
const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
console.log(students);
students.push(`Borya`);
console.log(students);
students.shift();
console.log(students);
students.unshift(`Andrey`);
console.log(students);

//     Задача 5.
// Дан массив:
//     const cats = ['Gachito', 'Tom', 'Batman']
// Выведите в консоль все элементы массива. Сначала через цикл for ,
// затем for..of .
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i=0; i< cats.length; ++i){
    console.log(cats[i]);
}
for (let name of cats){
    console.log(name);
}

//     Задача 6.
// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]
// Соедините два массива чисел в один.
//     В полученном массиве попробуйте найти индекс числа 8
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const newArray = evenNumbers.concat(oddNumbers);
console.log(newArray);
console.log(newArray.indexOf(8));


// Задача 7.
// Дан массив:
//     const binary = [0, 0, 0, 0]
// Наш бинарный массив неполный, в нем явно не хватает единиц.
//     Превратите данный массив в строку.
//     [0, 0, 0, 0] -> '0101010'
const binary = [0, 0, 0, 0];
const joinBinary = binary.join(`1`);
console.log(joinBinary);


// Продвинутый уровень
// Для решения задач используйте циклы for или for..of
// Задача 1.
// Реализуйте функцию, которая будет проверять, является ли слово
// палиндромом.
const myWord = `Шалаш`;
const checkedPalindrome = (word) => {
word = word.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
const lastIndex = word.length - 1;

    for ( let i =0; i<word.length / 2; ++i){
        if(word [i] !== word [lastIndex -i]){
            return false;
        }
    }
    return true;
};
console.log(checkedPalindrome(myWord))

const checkedPalindrome2 = (word1) => {

    word1 = word1.toLowerCase();

   const wordToArray = Array.from(word1);
    console.log(wordToArray)
   let reversedWord1 = "";

    for ( let char of wordToArray.reverse()){
        reversedWord1 += char;
    }
     return word1 === reversedWord1;
}
console.log(checkedPalindrome2(myWord))




//     Задача 2.
// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]
// Выведите в консоль среднее значение чисел в многомерном массиве.
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

let sum = 0;
let count = 0;
for (let row of matrix){
    for (let numbers of row){
        sum += numbers;
        count ++ ;
    }
}
const averageSum = sum / count;
console.log(averageSum)

//     Задача 3.
// Дан массив:
//     const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// Создайте два массива, в один поместите все положительные числа включая 0,
//     в другой все отрицательные. Оба массива затем выведите в консоль.
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
let positiveArray = [];
let negativeArray = [];
for (let symbols of mixedNumbers){
    if (symbols >= 0){
        positiveArray.push(symbols);
    }else {
        negativeArray.push(symbols)
    }
}
console.log(positiveArray, negativeArray)


//     Задача 4.
// Создать массив длинной не менее 5, из динамически созданных случайных
// чисел. Далее написать алгоритм, который берет все числа из исходного
// массива, возводит их в куб и записывает в новый массив. В конце вывести оба
// массива в консоль
const myArray = [12, 66, 9, 99, 77];
let myNewArray = [];
for (let numbersArray of myArray ) {
    numbersArray = numbersArray ** 3;
    myNewArray.push(numbersArray);
}
console.log(myNewArray, myArray);
