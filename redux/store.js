import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./slices/globalSlice";
import CartSlice from "./slices/carritoSlice";
import UsersSlice from "./slices/usersSlice";
import { app_Api } from "../services/app_Service";

export const store = configureStore({
  reducer: {
    Global: GlobalSlice,
    Cart: CartSlice,
    User: UsersSlice,
    [app_Api.reducerPath]: app_Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(app_Api.middleware),
});
