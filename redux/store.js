import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./slices/globalSlice";
import CartSlice from "./slices/carritoSlice";
import UsersSlice from "./slices/usersSlice";
import { app_Api } from "../services/app_Service";
import { orders_Api } from "../services/orders_Services";
import { auth_Api } from "../services/auth_Service";

export const store = configureStore({
  reducer: {
    Global: GlobalSlice,
    Cart: CartSlice,
    User: UsersSlice,
    [app_Api.reducerPath]: app_Api.reducer,
    [orders_Api.reducerPath]: orders_Api.reducer,
    [auth_Api.reducerPath]: auth_Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(app_Api.middleware)
      .concat(orders_Api.middleware)
      .concat(auth_Api.middleware),
});
