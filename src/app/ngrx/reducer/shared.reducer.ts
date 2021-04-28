import { setLoadingSpinner, setErrorMessage } from '../actions';
import { createReducer, on } from '@ngrx/store';
import { SharedState } from '../states';

const initialState: SharedState = {
  showLoading: false,
  errorMessage: '',
};

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
