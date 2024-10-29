import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./slices/globalSlice";
import CartSlice from "./slices/carritoSlice";
import UsersSlice from "./slices/usersSlice";
import { app_Api } from "../services/app_Service";
import { tickets_Api } from "../services/tickets_Services";
import { auth_Api } from "../services/auth_Service";

export const store = configureStore({
  reducer: {
    Global: GlobalSlice,
    Cart: CartSlice,
    User: UsersSlice,
    [app_Api.reducerPath]: app_Api.reducer,
    [tickets_Api.reducerPath]: tickets_Api.reducer,
    [auth_Api.reducerPath]: auth_Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(app_Api.middleware)
      .concat(tickets_Api.middleware)
      .concat(auth_Api.middleware),
});
