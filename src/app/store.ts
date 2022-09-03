import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import loginReducer from './reducers/loginReducer';
import cafeAllReducer from './reducers/cafeAllReducer';

export const store = configureStore({
  reducer: {
    sessionID: loginReducer,
    cafeAll: cafeAllReducer
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
