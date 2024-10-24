import { createSlice } from "@reduxjs/toolkit";

export const GlobalSlice = createSlice({
  name: "Global",
  initialState: {
    isOnLine: true,
  },
  reducers: {
    changeOnLine: (state) => {
      state.isOnLine = !state.isOnLine;
    },
  },
});

export const { changeOnLine } = GlobalSlice.actions;
export default GlobalSlice.reducer;
