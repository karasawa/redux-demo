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
    amount: 2,
    total: 0,
  } as CartState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
  },
});

export const { clearCart } = CartSlice.actions;
export default CartSlice.reducer;
