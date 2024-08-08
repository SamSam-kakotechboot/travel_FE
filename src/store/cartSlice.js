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
        cartItem => cartItem.ticketID === item.ticketID
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
    },
    removeFromCart: (state, action) => {
      const { ticketID } = action.payload;
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.ticketID !== ticketID
      );
    },
    clearCart: state => {
      state.cartItems = [];
    },
    increaseQuantity: (state, action) => {
      const { ticketID } = action.payload;
      const existingItem = state.cartItems.find(
        cartItem => cartItem.ticketID === ticketID
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { ticketID } = action.payload;
      const existingItem = state.cartItems.find(
        cartItem => cartItem.ticketID === ticketID
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        // 수량이 0이 되면 장바구니에서 제거
        state.cartItems = state.cartItems.filter(
          cartItem => cartItem.ticketID !== ticketID
        );
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
