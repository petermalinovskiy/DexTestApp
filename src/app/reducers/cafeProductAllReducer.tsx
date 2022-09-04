import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CafeProductAllState {
  ProductAllData: CafeProductItemData[],
}

type CafeProductItemData = {
  id: string,
  cofeId: string,
  name: string,
  price: number,
  favorite: boolean,
  imagesPath: string
}

const initialState: CafeProductAllState = {
  ProductAllData: [  
    {
      id: '',
      cofeId: '',
      name: '',
      price: 0,
      favorite: false,
      imagesPath: ''
    }
  ]
};

export const cafeProductAllSlice = createSlice({
  name: 'CafeProductAll',
  initialState,
  reducers: {
    getAllCafeProduct: (state, action: PayloadAction<CafeProductItemData[]>) => {
      state.ProductAllData = action.payload;
    },
  },

});

export const {getAllCafeProduct} = cafeProductAllSlice.actions;

export const selectCafeProductAll = (state: RootState) => state.cafeProductAll.ProductAllData

export default cafeProductAllSlice.reducer;
