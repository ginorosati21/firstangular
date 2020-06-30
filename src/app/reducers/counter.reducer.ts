import { Action } from '@ngrx/store';
import { ɵsetCurrentInjector } from '@angular/core';
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};


export function reducer(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'increment': {
      return {
        current: state.current + 1
      };
    }
    case 'decrement': {
      return {
        current: state.current - 1
      };
    }
    default: {
      return {
        current: state.current
      };
    }
  }
}
