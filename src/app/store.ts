import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import loginReducer from './reducers/loginReducer';
import cafeAllReducer from './reducers/cafeAllReducer';
import cafeProductAllReducer from './reducers/cafeProductAllReducer';
import favoriteReducer from './reducers/favoriteReducer';

export const store = configureStore({
  reducer: {
    sessionID: loginReducer,
    cafeAll: cafeAllReducer,
    cafeProductAll: cafeProductAllReducer,
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
