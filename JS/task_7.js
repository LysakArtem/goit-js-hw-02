"use strict";

const isLoginValid = function(login){
    if(login.length>3&&login.length<17){
        return true;
    }
}


const isLoginUnique = function(allLogins, login){
    const isIncludLogin=allLogins.includes(login);
    if(!isIncludLogin){
        return true;
    }
}
const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const addLogin= function(allLogins, login){
    if(!isLoginValid(login)){
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return allLogins;
    }
    if(!isLoginUnique(allLogins, login)){
        console.log('Такой логин уже используется!');
        return allLogins;
    }
    allLogins.push(login);
    console.log('Логин успешно добавлен!');
    return  allLogins;
}
    
// console.log(isLoginUnique(allLogins, 'Artem'));

// addLogin(allLogins,'Evgeniy')
// console.log(allLogins);



// Вызовы функции для проверки работоспособности твоей реализации.

console.log(addLogin(allLogins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(allLogins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(allLogins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(allLogins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

