import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "User",
  initialState: {
    userInfo: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload
    },
    logOut:(state)=>{
      state.isLogged = false
    }
  },
});

export const { setUser, logOut } = UsersSlice.actions;
export default UsersSlice.reducer;
