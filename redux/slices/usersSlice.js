import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "User",
  initialState: {

    isLogged: true,

    userInfo:{
        name:null,
        address: null,
        phone: null
    }
  },
  reducers: {
    changeLogged: (state) => {
      state.isLogged = !state.isLogged;
    },
  },
});

export const { changeLogged} = UsersSlice.actions;
export default UsersSlice.reducer;