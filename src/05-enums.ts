// Enum (перечесление)

/*
 *  - Перечисление размеров пиццы
 *  - Дефолтные значения
 *  - Кастомные значения
 */

// Enum c дефотными значениями
enum ProductСost {
  Low,
  Medium,
  High,
}

// Enum c кастомными значениями
enum PizzaSize {
  Small = 20,
  Medium = 30,
  Large = 40,
}

console.log(ProductСost.Low);
console.log(PizzaSize.Medium);

export {};
