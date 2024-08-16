const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { redirect } from 'react-router-dom';
import { getAuthToken } from './authAction';
import { clearCart } from '../store/cartSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const cartAction = createAsyncThunk(
  'cart/submitOrder',
  async ({ formData }, { dispatch }) => {
    const orders = JSON.parse(formData.get('orders'));
    const totalAmount = formData.get('totalAmount');
    const token = getAuthToken();

    try {
      const response = await fetch(`${apiUrl}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          orders,
          totalAmount: parseFloat(totalAmount),
        }),
      });

      if (!response.ok) {
        throw new Error('Order submission failed');
      }

      dispatch(clearCart()); // 주문이 성공하면 장바구니 비우기
      return { success: true };
    } catch (error) {
      console.error('Order submission failed:', error);
      throw error;
    }
  }
);
