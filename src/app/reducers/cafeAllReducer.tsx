import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface cafeAllState {
  CafeAllData: CafeItemData[]
}

type CafeItemData = {
  id: string,
  name: string,
  address: string,
  coordinates: string,
  description: string,
  images: string
}

const initialState: cafeAllState = {
  CafeAllData: []
};

export const cafeAllSlice = createSlice({
  name: 'CafeAll',
  initialState,
  reducers: {
    getAllCafe: (state, action: PayloadAction<CafeItemData[]>) => {
      state.CafeAllData = action.payload;
    },

  },

});

export const {getAllCafe} = cafeAllSlice.actions;

export const selectCafeAll = (state: RootState) => state.cafeAll.CafeAllData

export default cafeAllSlice.reducer;
