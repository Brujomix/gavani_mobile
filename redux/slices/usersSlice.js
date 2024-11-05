import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "User",
  initialState: {
    isLogged: false,
    userInfo: null,
  },

  reducers: {
    changeLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload
    },
    logOut:(state)=>{
      state.isLogged = false
    }
  },
});

export const { changeLogged, setUser, logOut } = UsersSlice.actions;
export default UsersSlice.reducer;
