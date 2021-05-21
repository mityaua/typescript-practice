// Классы на typescript

import { Component } from 'react';
import './Counter.css';

// Описываем интерфейс для пропсов Класса (все якобы обязательные, но в Классах нужно указывать defaultProps)
interface IProps {
  initialValue: number;
  step: number;
}

// Описываем стейт Класса
interface IState {
  value: number;
}

// Если нет пропсов тогда пустой обьект <{}, IState>
export default class CounterClass extends Component<IProps, IState> {
  static defaultProps = {
    initialValue: 0,
    step: 1,
  };

  state = {
    value: this.props.initialValue,
  };

  // В данном случае методы типизированы под капотом дженериками, можно не описывать
  // Потому что ничего не принимает и ничего не возвращает
  increment = () => this.setState(({ value }) => ({ value: value + 1 }));
  decrement = () => this.setState(({ value }) => ({ value: value - 1 }));

  render() {
    const { value } = this.state;
    const { step } = this.props;

    // В return ничего не типизируется
    return (
      <div className="Counter">
        <span className="Counter__value">{value}</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.increment}>
            Увеличить на {step}
          </button>
          <button type="button" onClick={this.decrement}>
            Уменьшить на {step}
          </button>
        </div>
      </div>
    );
  }
}
