"use strict";

let total = 0;
const numbers = [];

do {
  let input = prompt("Введите число!");
  if (input === null) {
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(input);
} while (true);

for( const number of numbers){
    total+=number ;
}
// console.log(numbers);
if (numbers.length!=0){
    console.log(`Общая сумма чисел равна ${total}`);
}
else 
    console.log(`Массив пустой!! Складівать нечего!`)