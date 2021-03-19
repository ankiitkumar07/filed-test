import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../action/user.actions';
import { User } from 'src/app/models/user';


export const userFeatureKey = 'user';

export interface State {
  users: User[]
}

export const initialState: State = {
  users: []
};


export const reducer = createReducer(
  initialState,
  on(UserActions.addUser,
    (state: State, {user}) => 
    ({...state,
    users: [...state.users, user]
  }))
);

export function userReducer(state: State | undefined, action: Action): any {
  return reducer(state, action)
}

