import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.ticketId === item.ticketId
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        // 새로운 상품의 초기 수량을 1로 설정
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.ticketId !== itemId
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.ticketId === itemId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.ticketId === itemId
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        // 수량이 0이 되면 장바구니에서 제거
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.ticketId !== itemId
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
