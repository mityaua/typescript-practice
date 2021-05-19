// Дженерик-интерфейсы (интерфейс, у которого тип какого-то свойства может быть произвольным)

// Первый пример

interface IUser<T> {
  id: T;
}

// Применение интерфейса IUser
const mango: IUser<number> = { id: 25 };
const kiwi: IUser<string> = { id: 'd3g3ggdsgs4-35' };

console.log(mango);
console.log(kiwi);

// Второй пример

interface ITab<T> {
  id: string;
  position: number;
  active: boolean;
  content: T;
}

type TstringType = ITab<string>;
type TstringArrayType = ITab<string[]>;

const tab1: TstringType = {
  id: 'id-1',
  position: 2,
  active: false,
  content: 'tab-data',
};

const tab2: TstringArrayType = {
  id: 'id-21',
  position: 5,
  active: true,
  content: ['content-1', 'content-2'],
};

console.log(tab1);
console.log(tab2);

export {};
