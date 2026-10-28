/*Задача 1. Замовлення дроїдів
Виконуй це завдання у файлі task-1.js
Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів. Оголоси функцію makeTransaction, яка очікує три параметри:
quantity — кількість замовлених дроїдів
pricePerDroid — ціна одного дроїда
customerCredits — сума коштів на рахунку клієнта
Доповни функцію так:
Обчисли загальну суму замовлення (кількість дроїдів, помножена на ціну одного дроїда).
Перевір, чи клієнт може оплатити замовлення.
Якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція повертає рядок "Insufficient funds!".
В іншому випадку функція повертає рядок:
You ordered <quantity> droids worth <totalPrice> credits!
де:
<quantity> — кількість замовлених дроїдів
<totalPrice> — загальна вартість замовлення
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
Залиш цей код для перевірки ментором.
Вимоги
Оголошено функцію makeTransaction(quantity, pricePerDroid, customerCredits).
Виклик makeTransaction(5, 3000, 23000) повертає "You ordered 5 droids worth 15000 credits!".
Виклик makeTransaction(3, 1000, 15000) повертає "You ordered 3 droids worth 3000 credits!".
Виклик makeTransaction(10, 5000, 8000) повертає "Insufficient funds!".
Виклик makeTransaction(8, 2000, 10000) повертає "Insufficient funds!".
Виклик makeTransaction(10, 500, 5000) повертає "You ordered 10 droids worth 5000 credits!".
Виклик з будь-якими валідними аргументами повертає правильне значення.
Результати всіх викликів виведено в консоль.
*/
'use strict';
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = pricePerDroid * quantity;
    if(totalPrice > customerCredits){
        return "Insufficient funds!";
    } else
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"