import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
  sessionID: string | undefined  
}

const initialState: UserState = {
  sessionID: undefined,
};

export const sessionIDSlice = createSlice({
  name: 'sessionID',
  initialState,
  reducers: {
    logout: (state) => {
      state.sessionID = undefined;
    },
    login: (state, action: PayloadAction<string>) => {
      state.sessionID = action.payload;
    },
  },

});

export const {logout, login} = sessionIDSlice.actions;

export const selectSessionID = (state: RootState) => state.sessionID.sessionID

export default sessionIDSlice.reducer;
