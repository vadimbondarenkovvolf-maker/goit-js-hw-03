/*
задачa 2: композиція масивів
У task-2.js оголоси функцію makeArray(firstArray, secondArray, maxLength). Вона має об’єднати два масиви і обмежити довжину результату.
Створи новий масив методом concat(): спочатку елементи firstArray, потім — secondArray.
Порівняй довжину об’єднаного масиву з maxLength.
Якщо масив довший, поверни його частину від першого елемента до maxLength.
Інакше поверни весь об’єднаний масив.
Додай шість викликів console.log з ТЗ і залиш їх для ментора.
Не змінюй firstArray і secondArray. Функція має створити та повернути новий масив.
*/
'use strict';

function makeArray(firstArray, secondArray, maxLength){
    const all = firstArray.concat(secondArray);
    if(all.length > maxLength){
        return all.slice(0, maxLength);
    } 
        return all;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []