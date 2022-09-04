import { getStateFromPath } from '@react-navigation/native';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CafeProductState {
  Product: ProductData[]
}

type ProductData = {
  id: string,
  productName: string,
  price: number,
  cofeId: string,
  cofeName: string,
  favarite: boolean,
  attribute?: [
    {
      id: string,
      description: string,
      iconType: string
    }
  ],
  imagesPath: string
}

const initialState: ProductData = {
    id: '',
    productName: '',
    price: 0,
    cofeId: '',
    cofeName: '',
    favarite: true,
    attribute: [
      {
        id: '',
        description: '',
        iconType: ''
      }
    ],
    imagesPath: ''
};

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<ProductData>) => {
      state.id = action.payload.id;
    },
  },

});

export const {getProduct} = productSlice.actions;

export const selectProduct = (state: RootState) => state.Product.cofeId

export default productSlice.reducer;
