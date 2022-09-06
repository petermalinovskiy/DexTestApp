import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FavoriteAllState {
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

const initialState: FavoriteAllState = {
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

export const favoriteAllSlice = createSlice({
  name: 'FavoriteAll',
  initialState,
  reducers: {
    getAllFavorite: (state, action: PayloadAction<CafeProductItemData[]>) => {
      state.ProductAllData = action.payload;
    },
  },

});

export const {getAllFavorite} = favoriteAllSlice.actions;

export const selectFavoriteAll = (state: RootState) => state.favorite.ProductAllData

export default favoriteAllSlice.reducer;
