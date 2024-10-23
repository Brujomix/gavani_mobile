import { createSlice } from "@reduxjs/toolkit";
import { products, categories } from "../../dataTest.json";

export const GlobalSlice = createSlice({
  name: "Global",
  initialState: {
    isOnLine: false,
    Products: products,
    Categories: categories,
    productFilteredByCategory: [],
    favoritesProducts: products.filter((e) => e.pro_top === true),
  },
  reducers: {
    changeOnLine: (state) => {
      state.isOnLine = !state.isOnLine;
    },
    setProducts: (state, actions) => {
      state.Products = actions.payload;
    },
    setCategories: (state, actions) => {
      state.Categories = actions.payload;
    },
    setFavoritesProducts: (state) => {
      state.favoritesProducts = products.filter((e) => e.pro_top === true);
    },
    setProductsFilterByCategory: (state, action)=>{
        state.productFilteredByCategory = products.filter(e=>e.pro_cat_iden === action.payload)
    }
  },
});

export const { changeOnLine, setProducts, setCategories, setFavoritesProducts, setProductsFilterByCategory } = GlobalSlice.actions;
export default GlobalSlice.reducer;
