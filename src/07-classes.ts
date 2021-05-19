// Классы

/*
 *  - объявление и типизация свойств
 *  - дефолтные значения свойств
 *  - публичные и приватные свойства и методы
 *  - readonly свойства
 *  - parameter properties +-
 *  - Статические свойства и методы
 *  - Интерфейс класса с implements
 */

// Интерфейс для конструктора Класса
interface Params {
  size: string;
  toppings: string[];
}

// Интерфейс для Класса (его будущего экземпляра). Приватные свойства и методы не описываються!
interface IPizza {
  size: string;
  addTopping(topping: string): void;
}

// Класс + implements (в начале обьявляються свойства, по умолчанию они публичные. Лучше указывать явно)
class Pizza implements IPizza {
  static Sizes = 5; // Статическое свойство, инфериться (если значение не присвоено, то нужно указать тип)

  public size: string; // Публичное свойство
  private toppings: string[]; // Приватное свойство. Доступно только в методах. Можно использовать readonly

  constructor({ size, toppings = [] }: Params) {
    this.size = size;
    this.toppings = toppings;
  }

  // Публичный метод
  public addTopping(toppings: string) {
    console.log(this.validateToping(toppings));

    this.toppings.push(toppings);
  }

  // Приватный метод
  private validateToping(topping: string) {
    console.log(topping);
    // какие-то проверки или валидация параметра
    return true;
  }
}

const pizza = new Pizza({ size: 'medium', toppings: ['cheese'] });

console.log(pizza);

export {};
