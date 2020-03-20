var money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

var a1 = prompt("Введите обязательную статью расходов в этом месяце", '');
	a2 = prompt("Во сколько обойдется?", '');
	a3 = prompt("Введите обязательную статью расходов в этом месяце", '');
	a4 = prompt("Во сколько обойдется?", '');

appData.expences.a1 = a2;
appData.expences.a3 = a4;

alert(appData.budget / 30);