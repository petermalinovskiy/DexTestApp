import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  user: string | null  
}

const initialState: UserState = {
  user: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      null;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action: PayloadAction<number>) => {
      action.payload;
    },
  },

});

export const {logout, login} = userSlice.actions;

export default userSlice.reducer;
