import { store } from '../store';
import { setError } from '../store/action';
import { clearError } from '../store/api-actions';

export const handleError = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};
