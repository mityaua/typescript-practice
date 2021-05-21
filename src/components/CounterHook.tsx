// Функциональный компонент + хуки (на typescript)

import { useState } from 'react';
import './Counter.css';

// Описываем пропсы
// Свойства в интерфейсе можно делать необязательными через ?
interface IProps {
  initialValue?: number;
  step?: number;
}

// Прописываем дженерик-интерфейс React.FC<IProps> или в параметрах указываем :IProps
const CounterHook = ({ initialValue = 0, step = 1 }: IProps) => {
  const [value, setValue] = useState(initialValue); // Если тип меняется тогда можно useState<string | null>(initialValue)

  const increment = () => setValue(value => value + step);
  const decrement = () => setValue(value => value - step);

  // В return ничего не типизируется
  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>

      <div className="Counter__controls">
        <button type="button" onClick={increment}>
          Увеличить на {step}
        </button>
        <button type="button" onClick={decrement}>
          Уменьшить на {step}
        </button>
      </div>
    </div>
  );
};

export default CounterHook;
