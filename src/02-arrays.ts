// Массивы

/*
 *  - Нотации `тип[]` и `Array<тип>`
 *  - `(тип | тип)[]`
 *  - `readonly` и `ReadonlyArray<тип>`
 *  - Tuple `[тип, тип]`, например массив координат
 */

const temps: number[] = [1, 2, 3, 4, 5];
const tempts2: Array<number> = [6, 7, 8, 9, 10];

const array1: string[] = ['Hello World']; // Массив строк
const array2: (number | boolean)[] = [1, 2, true]; // Массив нескольких типов
const array3: boolean[][] = [[true, false]]; // Массив массивов

const temps3: readonly number[] = [12, 13, 34, 42]; // Только для чтения (нельзя изменять массив)

// Tuples или Кортежи (массив определённых значений в какой-то последовательности)
const coords: [number, number] = [50.342, 40.145];
const rgb: [number, number, number] = [255, 0, 100];

console.log(temps);
console.log(tempts2);
console.log(temps3);
console.log(array1);
console.log(array2);
console.log(array3);
console.log(coords);
console.log(rgb);

export {};
