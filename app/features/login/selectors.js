import { createSelector } from 'reselect';

export const getId = state => state.loginReducer.id;
export const getLoginState = createSelector(
    [getId],
    id => (id)
);
