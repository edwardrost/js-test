'use strict'

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {};
appData.budget = money;
appData.timeData = time;
appData.expences = {};
appData.optionalExpences = {};
appData.income = [];
appData.savings = false;

let answer1 = prompt("Required expences article", "Meal");

let answer2 = prompt("How much?", "300");

appData.expences.answer1 = answer2;

alert(answer2/30);
