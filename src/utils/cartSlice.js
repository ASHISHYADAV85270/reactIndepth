import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //addToCart-> Action    reducer func (state, action) => {}
    addToCart: (state, action) => {
      //mutating the state
      const newItem = action.payload;

      const existingItem = state.items.find((item) => {
        return item.card.info.id === newItem.card.info.id;
      });
      if (existingItem) {
        existingItem.count += newItem.count;
      } else {
        newItem.count = 1;
        state.items.push(newItem);
      }
      // console.log(current(state.items));
    },
    removeItem: (state, action) => {
      if (action.payload[1] == 1) {
        state.items = state.items.filter(
          (item) => item?.card?.info?.id !== action.payload[0]
        );
      } else {
        state.items.forEach((item) => {
          if (item?.card?.info?.id === action.payload[0]) {
            item.count--;
          }
        });
      }
      state.totalprice -= action.payload[2] / 100;
    },
    clearCart: (state, action) => {
      // console.log(current(state));
      state.items = [];
      // console.log(current(state));
    },
  },
});
export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
