// Интерфейсы (для описания сложных типов - чаще это обьекты, реже функции)

/*
 *  - Конструкция `interface`. Хороший тон - название с буквы I
 *  - Необзательные поля с `key?: value`
 *  - readonly поля с `readonly key: value`
 *  - Ошибка при добавлении полей не существующих в интерфейсе
 * - Index signatures: объект произвольных свойств со значениями `[key: тип]: тип`
 * - Наследование интерфейсов с extends
 *  - [interface vs type](https://pawelgrzybek.com/typescript-interface-vs-type/)
 */

// Интерфейс + необязательные свойства ? + защита от изменения readonly (по умолчанию в интерфейсе всё обязательное)
interface StylesConfig {
  readonly color: string;
  width: string;
  height: string;
  length?: number;
  active?: boolean;
}

// Применение интерфейса для обьекта config
const config: StylesConfig = {
  color: 'tomato',
  length: 42,
  width: '100px',
  height: '200px',
  active: true,
};

// Интерфейс для обьекта с неизвестным количеством свойств и явно заданным типом (свойство - строка: значение - число)
interface Employees {
  [key: string]: number;
}

// Применение интерфейса для обьекта employees
const employees: Employees = {
  kiwi: 5,
  mango: 22,
  poly: 42,
  bravo: 10,
};

// Наследование интерфейсов (Extending Interfaces) - используется редко, к примеру наследование прав пользователей

// Обьявление интерфейса (с цветом как строка)
interface Shape {
  color: string;
}

// Наследование Square от интерфейса Shape (длинна как число)
interface Square extends Shape {
  length: number;
}

// Итоговый обьекст с нужными обязательными типами
const square: Square = {
  color: 'tomato',
  length: 200,
};

console.log(config);
console.log(employees);
console.log(square);

export {};
