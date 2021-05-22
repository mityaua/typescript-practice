// Типизация классового компонента

import { Component } from 'react';

import './TodoEditor.css';

// Типизируем пропсы
interface IProps {
  onSubmit: (message: string) => void; // Типизация функции на пропсах, которая ничего не возвращает
}

// Типизируем стейт
interface IState {
  message: string;
}

// Указываем интерейс для пропсов и стейта
class TodoEditor extends Component<IProps, IState> {
  state = {
    message: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>

        <button type="submit" className="TodoEditor__button">
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
