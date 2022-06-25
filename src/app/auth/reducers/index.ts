import { createReducer, on } from '@ngrx/store';
import { User } from '../../login/login.component';
import { AuthActions } from '../actions/auth-actions-type';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
  form: any;
}

export const initialAuthState: AuthState = {
// @ts-ignore
  user: undefined,
  form: undefined
}

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      ...state,
      user: action.user,
      form: action.form
    }
  })
)
