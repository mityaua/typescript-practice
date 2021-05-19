// Дженерик с обьектами - (расширение дженерика, более точное указание формы дженерика)
// Используем для того, чтобы создать границы для дженерика

// Расширение дженерика + interface
interface ILength {
  length: number;
}

const logLength = <T extends ILength>(args: T) => {
  return args.length;
};

console.log(logLength([1, 2, 3, 4, 5]));
console.log(logLength('qweqwe'));
// console.log(logLength(5)); // работать не будет, потому что у числа нету свойства length

// Расширение дженерика + interface
interface IPerson {
  firstName: string;
  lastName: string;
}

const addFullName = <P extends IPerson>(person: P) => {
  return {
    ...person,
    fullname: `${person.firstName} ${person.lastName}`,
  };
};

const result = addFullName({
  firstName: 'Kiwi',
  lastName: 'Walles',
});

const result2 = addFullName({
  firstName: 'Mango',
  lastName: 'Potter',
  age: 42,
});

console.log(result);
console.log(result2);

export {};
