// Доп. практика с дженериками

// Типы,состоящие из юнионов
type TAnimationState = 'playing' | 'paused';
type THttpState = 'request' | 'success' | 'error';

const makeState = <S>(initialState: S) => {
  let state = initialState;

  const getState = () => {
    return state;
  };

  const setState = (newState: S) => {
    state = newState;
  };

  return {
    getState,
    setState,
  };
};

// Явно указали аргумент-тип при вызове
const animationState = makeState<TAnimationState>('playing');
animationState.setState('paused');
// animationState.setState('request'); // будет ошибка

// Явно указали аругмент тип при вызове
const httpState = makeState<THttpState>('success');
httpState.setState('request');
// httpState.setState('playing'); будет ошибка

export {};
