// Generics (обобщения, обобщённые типы, дженерики)
// Концепция дженериков - когда приходит что угодно и это что-угодно нужно описать (любые типы значений)

// Думайте о дженериках как о аргументе функции, в котором вы указываете тип других аргументов
// [Обобщённые типы](https://canonium.com/articles/typescript-generics)

// Дженерик функция с одним параметром
const reverse = <T>(array: T[]) => {
  return [...array].reverse();
};

console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(reverse(['mango', 'kiwi', 'poly', 'bravo']));
console.log(reverse([{ a: 1 }, { b: 2 }, { c: 3 }]));

// Дженерик функция с N-количеством параметров - первый пример
const isEqual = <T, Y>(a: T, b: Y) => {
  return Object.is(a, b);
};

console.log(isEqual(5, 5));
console.log(isEqual(1, '2'));

// Второй пример
const makeArray = <T, Y>(a: T, b: Y) => {
  return [a, b];
};

console.log(makeArray(1, 2));
console.log(makeArray('color', true));

// Пример для rest параметров
const foo = <M, T>(mult: M, ...rest: T[]) => {
  return [...rest];
};

console.log(foo(55, [1, 2, 3]));
console.log(foo('low', ['middle', 'expert', 'noob']));

export {};
