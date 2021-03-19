import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducer/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
    fromUser.userFeatureKey,
)

export const selectUsers = createSelector(
    selectUserState,
    (state: fromUser.State) => state.users
)

