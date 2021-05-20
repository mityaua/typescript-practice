// Классы в дженериках (используется редко, даже в Реакте, так как хуки)

type TAnimationState = 'playing' | 'paused';
type THttpState = 'request' | 'success' | 'error';

class State<S> {
  private state: S;

  constructor(initialState: S) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  setState(newState: S) {
    this.state = newState;
  }
}

const animationState = new State<TAnimationState>('playing');
animationState.setState('paused');
// animationState.setState('request) // будет ошибка

const httpState = new State<THttpState>('success');
httpState.setState('request');
// httpState.getState('playing'); // будет ошибка

export {};
