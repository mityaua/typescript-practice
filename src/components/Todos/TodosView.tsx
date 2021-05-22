import { useState } from 'react';
import shortid from 'shortid';

import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import Stats from './Stats';

import initialTodos from './todos.json';

import ITodo from '../../interfaces/Todo.interface'; // Импорт интерфейсов

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

// Описываем массив todos через аргумент-тип TTodo[] + указываем интерфейс ITodo для addTodo
const TodosView = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [filter, setFilter] = useState('');

  // Указываем тип параметра и интерфейс для todo (для todo для примера)
  const addTodo = (text: string) => {
    const todo: ITodo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    setTodos(todos => [todo, ...todos]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId));
  };

  const toggleCompleted = (todoId: string) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  const getVisibleTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  const calculateCompletedTodos = () => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  const completedTodoCount = calculateCompletedTodos();
  const visibleTodos = getVisibleTodos();

  // Разметка JSX не типизируется
  return (
    <>
      <TodoEditor onSubmit={addTodo} />

      <div style={barStyles}>
        <Filter value={filter} onChange={changeFilter} />
        <Stats total={todos.length} completed={completedTodoCount} />
      </div>

      <TodoList
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </>
  );
};

export default TodosView;
