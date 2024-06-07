// Функция принимает массив чисел, возвращает новый массив, в котором все четные числа получили +1,
// а нечетные -1. Использовать метод map.
// const example = [ 1,2,3,4,5,6,7,8,9,10,11,12];
//
// const array = (numbers) => {
//     return numbers.map ((number) => number %2 === 0 ? number + 1 : number -1)
//
//
// }
// console.log(array(example));

/////////////////////////////
// Функция принимает массив слов,возвращает новый массив слов, у которых первая буква большая, остальные маленькие.



// const example = [`love` , `hi`, `ViKa`, `KseNiYa`];
//
// const array = (words) => {
//  return words.map((word)=> word.slice(0,1).toUpperCase() + word.slice(1, word.length[-1]).toLowerCase())
// }
// console.log(array(example));

/////////////////////////\
// Функция принимает строку и проверяет ее на палиндром. В случае если строка является палиндромом возвращается true иначе
// false.
//
// const example = `шаvаш`
//
// const isPal = (string) => {
// const checkString = string.split(``).reverse().join(``)
//     return checkString === string ? true : false
// }
// console.log(isPal(example))
/////////////////////////////// ///////////////////////////////



///////////////////////////////

/*Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: women и men.
 Данные поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно. Также,
 вместо двух полей first_name и last_name у каждого из объектов должнобыть поле fullName в котором будут объеденины убранные
 поля (first_name и last_name). Количество пользователей может быть не ограничено.*/
//
// const usersArray = [
//     {
//         id: 1,
//         first_name: "Jeanette",
//         last_name: "Penddreth",
//         email: "jpenddreth0@census.gov",
//         gender: "Female",
//         ip_address: "26.58.193.2",
//     },
//     {
//         id: 2,
//         first_name: "Petr",
//         last_name: "Jackson",
//         email: "gfrediani1@senate.gov",
//         gender: "Male",
//         ip_address: "229.179.4.212",
//     },
//     {
//         id: 3,
//         first_name: "Anna",
//         last_name: "Maria",
//         email: "fox@senate.gov",
//         gender: "Female",
//         ip_address: "26.179.2.22",
//     },
//     {
//         id: 4,
//         first_name: "Max",
//         last_name: "Jackson",
//         email: "htrhr@senate.gov",
//         gender: "Male",
//         ip_address: "229.34.4.21",
//     },
// ];
//
// const genderCollections = (users) => {
//     const WOMEN = "Female";
//
//     return users.reduce((result, {first_name,last_name, ...other}) => {
//
//         const isWomen = other.gender === WOMEN;
//
//         const chouseGender = isWomen ? `women` : `men`;
//
//         const userToPush  = {
//             full_name: `${first_name} ${last_name}`,
//             ...other
//         };
//         result[chouseGender].push(userToPush);
//
//         return result
//
//
//     }, {men:[], women:[]})
// }
//
// console.log(genderCollections(usersArray));

//  ///////////////////////////////


// // Переделайте массив так, чтобы объекты были следующего вида {id: ..., title:...}. Использовать функцию map
//
// const newReleases = [
//     {
//         id: 70111470,
//         title: "Die Hard",
//         boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [4.0],
//         bookmark: [],
//     },
//     {
//         id: 654356453,
//         title: "Bad Boys",
//         boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [5.0],
//         bookmark: [{ id: 432534, time: 65876586 }],
//     },
//     {
//         id: 65432445,
//         title: "The Chamber",
//         boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [4.0],
//         bookmark: [],
//     },
//     {
//         id: 675465,
//         title: "Fracture",
//         boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [5.0],
//         bookmark: [{ id: 432534, time: 65876586 }],
//     },
// ];
//
// const updatedArray = (newReleases) => {
//     return newReleases.map(({id,title}) => ({id, title}))
// }
// console.log(updatedArray(newReleases));
///////////////////////////////

// Выведите массив ids для видео у которых рейтинг 5.0. В качестве входных данных используйте newReleases из предыдущего задания

// const newReleases = [
//     {
//         id: 70111470,
//         title: "Die Hard",
//         boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [4.0],
//         bookmark: [],
//     },
//     {
//         id: 654356453,
//         title: "Bad Boys",
//         boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [5.0],
//         bookmark: [{ id: 432534, time: 65876586 }],
//     },
//     {
//         id: 65432445,
//         title: "The Chamber",
//         boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [4.0],
//         bookmark: [],
//     },
//     {
//         id: 675465,
//         title: "Fracture",
//         boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [5.0],
//         bookmark: [{ id: 432534, time: 65876586 }],
//     },
// ];
//
//
// const filterRealse = (newReleases) => {
//     return newReleases.reduce((result, {id, rating}) => {
//
//         const [ratingValue] = rating;
//         // const ratingValuu1 = rating[0] it`s the same
//
//       if(ratingValue === 5){
//           result.push(id);
//       }
//       return result;
//     }, []);
// }
// console.log(filterRealse(newReleases));
/////////////////////////////// ///////////////////////////////


// Функция принимает объект с неограниченным количеством полей. Результатом выполнения функции должен быть объект, в котором
// были отсеяны поля со значениями null или undefined
// added HW-4 without task 2

// const obj = {
//     id: 675465,
//     title: "Fracture",
//     name: 'John',
//     age: 32,
//     gender: 'male',
//     street: null,
//     city: undefined,
// }
//
// const  filterNullUndefined = (obj)  =>{
//
//     const keyObj = Object.keys(obj);
//     console.log(keyObj)
//     const filterKeyObj= keyObj.filter(key =>  obj[key] !== null && obj[key] !== undefined);
//     console.log(filterKeyObj, `1111`)
//
//      return filterKeyObj.reduce((result, key) => {
//             result[key] = obj[key];
//          console.log(result[key], `result[key]`)
//          console.log(obj[key], `obj[key]`)
//          console.log(result, `result`)
//             return result;
//         }, {});
//
// }
// console.log(filterNullUndefined(obj));


// Написать функция которая принимает строку, и допустимое количество символов. Если длина строки превышает допустимое
// количество символов, функция должна обрезать строку, а в конец  добавить многоточие


                    /////////////////////////////// ///////////////////////////////
// / Функция принимает массив объектов пользователей первым параметром, вторым параметром принимает массив строк (id). Функция
// должна удалить всех пользователей, чьи id будут найдены в массиве id, которые передаются нашей функции вторым параметром и
// вернуть массив, с оставшимися пользователями.

// const users = [
//     {
//         id: 1,
//         name: "Alex",
//     },
//     {
//         id: 2,
//         name: "Tomara",
//     },
//     {
//         id: 3,
//         name: "Max",
//     },
// ];
//
// const filterUsers = (users,  blackList)=> {
//     return users.filter(({id})=> !blackList.includes(id))
//
//
// }
// console.log(filterUsers(users, [2, 3] ))

const users = [
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        age: 23,
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        age: 20,
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        age: 40,
    },
    {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        age: 36,
    },
    {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
        age: 70,
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        age: 45,
    },
];


const secondFn = (users) => {
   return  users.reduce((result, user) => {
       const firstChar = user.first_name[0].toLowerCase();
       console.log(firstChar)
       console.log(result, `1`)
       if(!result[firstChar]){
           result[firstChar] = [];
       }
       console.log(result, `2`)
       result[firstChar].push(user.first_name)


return result
   },{})
}
console.log(secondFn(users));
// const firstFn = (users) => {
//
//      return users.reduce((result, user, _, currentArray) => {
//          const {age} = user;
//
//           result.averageAge += age/ currentArray.length -1
//          if(age > 30){
//              result.more30++
//          }
//
//
//          return result
//
//     },{averageAge: 0, more30: 0, more40: 0, more18: 0, })
//
// }
//
// console.log(firstFn(users));
// const getFirstNameLastName = (users) =>{
// return  users.map((user)=>`${user.first_name} ${user.last_name}`).join(', ');
// }
// console.log(getFirstNameLastName(users));



// const createArrayAlf = (users) =>{
//     return users.map(({email}) => email).sort();
//
//
// }
// console.log(createArrayAlf(users));

// const createNewObj = (users) => {
//    return  users.map(({id, first_name, last_name}) => ({
//         id:id,
//         userName: `${first_name} ${last_name}`
//
//     }))
// }
// console.log(createNewObj(users));

// const sortByAge = (users) => {
//   return   users.filter(({age}) => age <= 40).sort();
// }
// console.log(sortByAge(users));


