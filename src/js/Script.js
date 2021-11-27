"use strict"

let siteCost = 1000;
let type = prompt(`Стоимость сайта: ${siteCost} руб.\nВведите тип сайта: `);
console.log("Ваш тип сайта: " + type);

let design = prompt("Укажите дизайн сайта(по умолчанию: Обычный): \n	1. Современный\t\t\t+200 руб.\n	2. Ретро\t\t\t\t\t+150 руб.\n	3. Постапокалипсис\t\t+300 руб.\n	4. Игровой\t\t\t\t+250 руб.");
let yourDesign;
let designCost = 0;
if(design == 1){
	yourDesign = "Современный"; 
	designCost = 200;
}
else if(design == 2){
	yourDesign = "Ретро";
	designCost = 150;
}
else if(design == 3){
	yourDesign = "Постапокалипсис";
	designCost = 300;
}
else if(design == 4){
	yourDesign = "Игровой";
	designCost = 250;
}
else{
	yourDesign = "Обычный";
}

console.log("Выбранный вами дизайн: " + yourDesign);

let sum = siteCost + designCost;

let adapt = confirm("Желаете адаптивный сайт(+50% к стоимости)?");
let yourAdapt;
if(adapt == true){
	console.log("Вы выбрали сайт с адаптацией");
	yourAdapt = "Да";
	sum += sum * 0.5;
}
else{
	console.log("Вы выбрали сайт без адаптации");
	yourAdapt = "Нет";
}


alert(`Ваш выбор:\n\tТип сайта: ${type}\n\tДизайн: ${yourDesign}\n\tАдаптация: ${yourAdapt} \n\nСумма: ${sum} руб`)
