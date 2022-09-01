import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
  sessionID: string | undefined  
}

const initialState: UserState = {
  sessionID: undefined,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


export const sessionIDSlice = createSlice({
  name: 'sessionID',
  initialState,
  reducers: {
    logout: (state) => {
      state.sessionID = undefined;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action: PayloadAction<string>) => {
      state.sessionID = action.payload;
    },
  },

});

export const {logout, login} = sessionIDSlice.actions;

export const selectSessionID = (state: RootState) => state.sessionID.sessionID

export default sessionIDSlice.reducer;
