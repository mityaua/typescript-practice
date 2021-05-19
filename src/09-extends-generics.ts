// Дженерик с обьектами - (расширение дженерика, указание обязательных свойств)
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

console.log(
  addFullName({
    firstName: 'Kiwi',
    lastName: 'Walles',
  }),
);

console.log(
  addFullName({
    firstName: 'Mango',
    lastName: 'Potter',
    age: 42,
  }),
);

export {};
