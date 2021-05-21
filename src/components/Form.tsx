// Функциональный компонент Формы + типизация событий и пропсов из родительского компонента + useRef

import { useState, useRef } from 'react';

// Типизация пропсов (функции) через интерфейс
interface IProps {
  onSubmit: (cred: { email: string; password: string }) => void;
}

export default function Form({ onSubmit }: IProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formRef = useRef(null); // Описали реф через явное указание null

  // Используем подсказку при наведении на onChange - дженерик ChangeEvent
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Неизвестное имя поля - ${name}`);
    }
  };

  // Используем подсказку при наведении на onSubmit - дженерик FormEvent
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label>
        Почта
        <input type="mail" name="email" onChange={onChange} value={email} />
      </label>

      <label>
        Пароль
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </label>

      <button type="submit">Войти</button>
    </form>
  );
}
