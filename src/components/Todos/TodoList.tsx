import classNames from 'classnames';

import './TodoList.css';

import ITodo from '../../interfaces/Todo.interface'; // Импорт интерфейсов

// Интерфейс для пропсов
interface IProps {
  todos: ITodo[];
  onDeleteTodo: (todoId: string) => void;
  onToggleCompleted: (todoId: string) => void;
}

// Указываем интерейс для пропсов
const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }: IProps) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList__text">{text}</p>

        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
