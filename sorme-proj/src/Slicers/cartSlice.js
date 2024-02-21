import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.productId === newItem.productId
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
    increaseItemQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const getCurrentQuantityById = (productId) => (state) => {
  const item = state.cart.items.find((item) => item.productId === productId);
  return item ? item.quantity : 0;
};

export const getTotalCartPrice = (state) =>
  state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const useCart = () => useSelector((state) => state.cart.items);
