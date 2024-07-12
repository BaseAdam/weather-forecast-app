import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    cityToCompare: '',
  },
  reducers: {
    setCityToCompare: (state, action: { payload: string }) => {
      state.cityToCompare = action.payload;
    },
  },
});

export const { setCityToCompare } = citySlice.actions;
export default citySlice.reducer;
