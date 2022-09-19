import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ProductListState {
  ProductList: CafeProductItemData[],
}

type CafeProductItemData = {
  id: string,
  cofeId: string,
  name: string,
  price: number,
  favorite: boolean,
  imagesPath: string
}

const initialState: ProductListState = {
  ProductList: []
};

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    getProductList: (state, action: PayloadAction<CafeProductItemData[]>) => {
      state.ProductList = action.payload;
    },
  },

});

export const {getProductList} = productListSlice.actions;

export const selectProductList = (state: RootState) => state.productList.ProductList

export default productListSlice.reducer;
