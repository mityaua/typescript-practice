// Примитивные типы

/*
 *  - Объявление типа: number, string, boolean, null и undefined, any и object
 *  - Ошибки:
 *    - присвоение значения другого типа
 *    - переопределение значения
 *  - [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
 *  - Множественные типы с type composition
 */

let age: number = 42; // Тип число
const name: string = 'Ann'; // Тип строка
const check: boolean = true; // Тип буль

let value: any = 5; // Любой тип, плохой кейс!
value = 'qweqwe';

let user: object; // Тип обьект. Плохой кейс! Слишком общий тип (может быть и массивом, и функцией, и обьектом)
user = {};

// Композиция типов
let id: string | number | boolean = 5;
id = 'hello';
id = false;

console.log(age);
console.log(name);
console.log(check);
console.log(value);
console.log(user);
console.log(id);

export {};
