/*
задачa 1: генератор slug
У task-1.js оголоси функцію slugify(title). 
Вона має перетворити заголовок на рядок у нижньому регістрі, де слова розділені дефісами.
Перетвори title на рядок у нижньому регістрі за допомогою toLowerCase().
Розділи рядок на масив слів методом split(" ").
Об’єднай слова в один рядок методом join("-").
Поверни готовий slug.
Додай чотири виклики console.log з ТЗ і залиш їх для ментора.
За умовою слова в title розділені лише пробілами, тому додаткова обробка символів не потрібна.
*/
'use strict';
function slugify(title) {
    return title.toLowerCase().split(" ").join("-");

}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"