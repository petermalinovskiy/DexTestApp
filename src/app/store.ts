import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import loginReducer from './reducers/loginReducer';


export const store = configureStore({
  reducer: {
    sessionID: loginReducer
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
