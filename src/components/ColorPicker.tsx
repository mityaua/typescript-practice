// Функциональный компонент + хуки (на typescript)

import { useState } from 'react';
import './ColorPicker.css';

// Тип для свойства в интерфейсе
type TOption = {
  label: string;
  color: string;
};

// Интерфейс для пропсов
interface IProps {
  options: TOption[];
  initialOptionPosition?: number; // необязательный проп
}

const ColorPicker = ({ options, initialOptionPosition = 3 }: IProps) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(
    initialOptionPosition - 1,
  ); // Не типизируем, так как явно указано число

  // Типизируем параметр функции
  const setActiveIdx = (index: number) => setActiveOptionIdx(index);

  // Типизируем параметр функции
  const makeOptionClassName = (index: number) => {
    const optionClasses = ['ColorPicker__option'];

    if (index === activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  const { label } = options[activeOptionIdx];

  // В return ничего не типизируется
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
