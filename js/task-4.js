/*
Задача 4. Доставка товару
Виконуй це завдання у файлі task-4.js
Оголоси функцію getShippingCost, яка очікує один параметр country — країну доставки. Обов'язково використай інструкцію switch.
Функція повертає рядок:
Shipping to <country> will cost <price> credits
де <country> і <price> — країна та вартість доставки з таблиці нижче.
Список країн і вартість доставки:
China — 100 кредитів
Chile — 250 кредитів
Australia — 170 кредитів
Jamaica — 120 кредитів
Якщо зазначеної країни немає у списку, функція повертає рядок "Sorry, there is no delivery to your country".
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
Залиш цей код для перевірки ментором.
Вимоги
Оголошено функцію getShippingCost(country).
У тілі функції використано інструкцію switch.
Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits".
Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country".
Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits".
Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits".
Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits".
Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country".
Виклик з будь-якими валідними аргументами повертає правильне значення.
Результати всіх викликів виведено в консоль.
*/
'use strict';

function getShippingCost(country) {
    let price;
    switch(country){
        case "China":
            price = 100;
            break;
        case "Chile":
            price = 250;
            break;
        case "Australia":
            price = 170;
            break;
        case "Jamaica":
            price = 120;
            break;
        default:  
            return "Sorry, there is no delivery to your country";               
    }
    return `Shipping to ${country} will cost ${price} credits`;
}
    
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"