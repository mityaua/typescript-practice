import './Stats.css';

// Типизируем пропсы
interface IProps {
  total: number;
  completed: number;
}

// Указываем интерейс для пропсов
const Stats = ({ total, completed }: IProps) => (
  <div className="Stats">
    <p className="Stats__item">
      <span className="Stats__value">{total}</span>
      <span className="Stats__label">Всего</span>
    </p>

    <p className="Stats__item">
      <span className="Stats__value">{completed}</span>
      <span className="Stats__label">Выполнено</span>
    </p>
  </div>
);

export default Stats;
