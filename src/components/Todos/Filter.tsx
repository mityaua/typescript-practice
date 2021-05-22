import './Filter.css';

// Типизируем пропсы
interface IProps {
  value: string;
  onChange: (filter: string) => void;
}

// Указываем интерейс для пропсов
const Filter = ({ value, onChange }: IProps) => (
  <div className="Filter">
    <p className="Filter__label">Фильтр по содержимому</p>

    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={evt => onChange(evt.target.value)} // Инлайново нет смысла типизировать, так как описали выше
    />
  </div>
);

export default Filter;
