let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true
};

function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a !='' && b != '' && a.length < 50 ) {
                console.log("done");
                appData.expences[a] = b;
        } else {
            console.log("неправильный ввод");
            i--;
        }
    }
}
chooseExpences();

function chooseOptExpences() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите НЕобязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a !='' && b != '' && a.length < 50 ) {
                console.log("done");
                appData.optionalExpences[a] = b;
        } else {
            console.log("неправильный ввод");
            i--;
        }
    }
}
chooseOptExpences();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Дневной бюджет: " + appData.moneyPerDay);
}
detectDayBudget();



alert("Ежедневный бюджет: " + appData.moneyPerDay);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true ) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
    }
}
checkSavings();