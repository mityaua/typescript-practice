// Типы (с большой буквы) - подходит для описания примитивов, композиций, Tuples, Union, функций

/*
 * Кастомные типы с Type
 * - Идентификатор c type composition
 * - Состояние с union
 */

// Тип + композиция типов
type ID = number | string;

const userId: ID = 1234567;
const postId: ID = 'qweqwe';

// Тип + Tuple (массив определённых значений в какой-то последовательности)
type Coords = [number, number];
const coords: Coords = [54.3534, 35.5634];

// Unions (когда у переменной одно из нескольких конкретных значений)

// Тип + Union
type Status = 'request' | 'success' | 'error';

const requestStatus: Status = 'error';

console.log(userId);
console.log(postId);
console.log(coords);
console.log(requestStatus);

export {};
