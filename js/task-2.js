/*Задача 2. Форматування повідомлення
Виконуй це завдання у файлі task-2.js
Оголоси функцію formatMessage, яка очікує два параметри:
message — рядок повідомлення
maxLength — максимальна довжина рядка
Доповни функцію так:
Якщо довжина message дорівнює або менша за maxLength, функція повертає початковий рядок без змін.
Якщо довжина перевищує maxLength, функція обрізає рядок до maxLength символів і додає трикрапку "..." в кінці.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
Залиш цей код для перевірки ментором.
Вимоги
Оголошено функцію formatMessage(message, maxLength).
Виклик formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula...".
Виклик formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien".
Виклик formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis...".
Виклик formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec".
Виклик formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis...".
Виклик formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla".
Виклик з будь-якими валідними аргументами повертає правильне значення.
Результати всіх викликів виведено в консоль.*/
'use strict';

function formatMessage(message, maxLength) {
    if(message.length <= maxLength){
        return message;
    } else {
    return message.slice(0, maxLength) + "...";
    } 
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"