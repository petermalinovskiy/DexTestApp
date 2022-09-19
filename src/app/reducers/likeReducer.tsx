import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ProductLikeState {
  ProductLike: ProductLike[]
}

type ProductLike = {
  productID: string | undefined,
  favorite: boolean | undefined
}

const initialState: ProductLikeState = {
  ProductLike: []
};

export const productLikeSlice = createSlice({
  name: 'productID',
  initialState,
  reducers: {
    like: (state, action: PayloadAction<ProductLike[]>) => {
      state.ProductLike = action.payload;
    },
  },

});

export const {like} = productLikeSlice.actions;

export const selectProductLike = (state: RootState) => state.ProductLike.ProductLike

export default productLikeSlice.reducer;
