import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  cartCounter: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (existItem) {
        existItem.quantity++;
        state.totalAmount += existItem.quantity * existItem.price;
      } else {
        const newItem = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        };
        state.cartItem.push(newItem);
        state.totalAmount += newItem.quantity * newItem.price;
        state.cartCounter += 1;
      }
    },
    addQuantity: (state, action) => {
      state.cartItem.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
          state.totalAmount += item.price;
        }
      });
    },
    subQuantity: (state, action) => {
      state.cartItem.map((item) => {
        if (item.id === action.payload) {
          item.quantity--;
          state.totalAmount -= item.price;
        }
      });
    },
    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => {
        if (item.id === action.payload) {
          state.totalAmount -= item.price;
          state.cartCounter -= 1;
        } else {
          return item;
        }
      });
    },
    clearAll: (state, action) => {
      state.cartItem = [];
      state.cartCounter = 0;
      state.totalAmount = 0;
    },
  },
});
export const { addToCart, addQuantity, subQuantity, removeItem, clearAll } =
  cartSlice.actions;
export default cartSlice.reducer;
