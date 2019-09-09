let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let expenses1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let much1 = prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {expenses1, much1},
    optionalExpenses: {},
    income: [],
    savings: false
};

let oneDay = alert("Ваш бюджет на 1 день: " + ((money - much1) / 30));

var taniNew;
