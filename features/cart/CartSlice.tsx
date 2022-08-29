import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItem";

export type CartItem = {
  id: number;
  title: string;
  price: string;
  img: string;
  amount: number;
};

export type CartState = {
  cartItems: CartItem[];
  amount: number;
  total: number;
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItems,
    amount: 4,
    total: 0,
  } as CartState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (typeof cartItem !== "undefined") {
        cartItem.amount = cartItem.amount + 1;
      }
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (typeof cartItem !== "undefined") {
        if (cartItem.amount === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
          return;
        }
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * Number(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  CartSlice.actions;
export default CartSlice.reducer;
