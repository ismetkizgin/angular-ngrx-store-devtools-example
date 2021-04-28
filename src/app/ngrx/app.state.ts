import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { SharedState } from './states';
import { SHARED_STATE_NAME } from './selectors';
import { SharedReducer } from './reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  router: RouterReducerState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  router: routerReducer,
};
