import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import authorizationReducer from './reducers/authorizationReducer';
import cafeAllReducer from './reducers/cafeAllReducer';
import productListReducer from './reducers/productListReducer';
import favoriteReducer from './reducers/favoriteReducer';
import likeReducer from './reducers/likeReducer';

export const store = configureStore({
  reducer: {
    sessionID: authorizationReducer,
    cafeAll: cafeAllReducer,
    productList: productListReducer,
    favorite: favoriteReducer,
    ProductLike: likeReducer
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
