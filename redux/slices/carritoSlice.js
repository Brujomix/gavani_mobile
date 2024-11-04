import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Cart",
  initialState: { cartProducts: [] },
  reducers: {
    addCartProduct: (state, action) => {
        const res = state.cartProducts.findIndex(
          (e) => e.pro_iden === parseInt(action.payload.pro_iden)
        );
        if (res === -1) {
          state.cartProducts.push({ ...action.payload, Cantidad: 1 });
        } else {
          const updateItem = state.cartProducts.find(
            (e) => e.pro_iden === parseInt(action.payload.pro_iden)
          );
          updateItem.Cantidad += 1;
        }
      },
      removeCartProduct: (state, action) => {
        const res = state.cartProducts.findIndex(
          (e) => e.pro_iden === parseInt(action.payload)
        );
        const updateItem = state.cartProducts.find(
          (e) => e.pro_iden === parseInt(action.payload)
        );
        if (res !== -1) {
          const cantidadUpdate = (updateItem.Cantidad -= 1);
          state.cartProducts[res] = { ...updateItem, Cantidad: cantidadUpdate };
          if (cantidadUpdate === 0) {
            state.cartProducts = state.cartProducts.filter(
              (e) => e.pro_iden !== parseInt(action.payload)
            );
          }
        }
      },
      clearCart: (state)=>{
        state.cartProducts = []
      }
  },
});

export const { addCartProduct, removeCartProduct, clearCart } = CartSlice.actions;
export default CartSlice.reducer;