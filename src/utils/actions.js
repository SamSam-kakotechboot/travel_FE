const apiUrl = import.meta.env.VITE_API_BASE_URL;
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

export const ticketDetailAction = createAsyncThunk(
  'ticketDetail/submitReview',
  async ({ reviewData }, { rejectWithValue }) => {
    const token = getAuthToken();
    try {
      const response = await fetch(`${apiUrl}/api/review/regist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        return rejectWithValue('Failed to submit review');
      }
      const data = await response.json();
      return data; // 성공적으로 전송된 경우 서버의 응답 데이터를 반환
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
