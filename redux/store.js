import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./slices/globalSlice";
import CartSlice from "./slices/carritoSlice";

export const store = configureStore({
  reducer: {
    Global: GlobalSlice,
    Cart: CartSlice,
  },
});
