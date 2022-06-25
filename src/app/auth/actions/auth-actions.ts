import { createAction, props } from '@ngrx/store';
import { User } from '../../login/login.component';

export const login = createAction(
  '[Login Page] User log in',
  props<{ user: User, form: any }>()
);
