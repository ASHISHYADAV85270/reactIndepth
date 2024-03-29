import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //addToCart-> Action    reducer func (state, action) => {}
    addToCart: (state, action) => {
      //mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action.payload
      );
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});
export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
