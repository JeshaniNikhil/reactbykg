import { createSlice } from '@reduxjs/toolkit'
const initialStateValue={
  color:"",
}
export const themeSlice = createSlice({
  name: 'theme',
  initialState:initialStateValue,
  reducers: {
    changedTextColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changedTextColor } = themeSlice.actions;
export default themeSlice.reducer;
