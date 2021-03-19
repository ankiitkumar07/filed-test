import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

// export const loadUsers = createAction(
//   '[User] Load Users',
//   (user: User) => ({user})
// );

export const addUser = createAction(
  '[User] Add User',
  (user: User) => ({user})
);




