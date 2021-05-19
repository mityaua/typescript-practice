// Функции

/*
 *  - Типизация параметров и возвращаемого значения (особый синтаксис)
 *  - Необязательные параметры
 *  - rest-параметры
 *  - Функция без явного возврата: тип void
 *  - Типизация подписи функции
 *    - черерз тип
 *    - через интерфейс
 *  - Типизация методов объекта в интерфейсе
 *    - ключ: () => тип; - старый синтаксис
 *    - ключ() : тип; - новый синтаксис!
 *  - Необязательные методы в интерфейсе
 */

// Тип для функции
type typeExample = (a: number, b: number) => number;

// Типизация параметров и возвращаемого значения
const createCocktail: typeExample = function (x, y) {
  return x + y;
};

createCocktail(5, 10);

// Пример для стрелочной функции
const arrowFoo: typeExample = (a, b) => a + b;

arrowFoo(42, 44);

// Тип для функции с rest параметрами
type restType = (
  a: number,
  b: number,
  c: number,
  ...restParams: number[]
) => number[];

const fn: restType = (a, b, c, ...restParams) => {
  return restParams;
};

fn(1, 2, 3, 4, 5);

// Функция без явного возврата: тип + void
type logFn = (message: string) => void;

const log: logFn = message => {};

log('hello!');

// Интерфейс для функции (как правило не используется, чаще Типы). Хороший тон - название с буквы I
// interface IAddFunc {
//   (a: number, b: number): number;
// }

// Типизация методов объекта в интерфейсе (+ enum + interface)

// Enum (перечесление)
enum PizzaSize {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

// Интерфейс + Enum для pizza (для описания сложных типов - обьекты)
interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  logSize?(): void; // Необязательные методы в интерфейсе
  getSize(): string;
  addTopping(topping: string): void;
}

// Конечный обьект с интерфейсом IPizza
const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings: ['sause', 'mushrooms'],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(pizza);

export {};
