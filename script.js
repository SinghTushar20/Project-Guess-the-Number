'use strict'
// prompt("Enter a number between 1 to 20 if the number matches you will be awarded with points");


const number = (Math.trunc(Math.random()*20)+1);

document.querySelector('.num').textContent = number;
document.querySelector('.again').textContent = "try again";

// const div_question= document.getElementById("num")

// div_question.textContent=number

console.log(number);
