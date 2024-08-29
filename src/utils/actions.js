const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { getAuthToken } from './authAction';
import { clearCart } from '../store/cartSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { json, redirect } from 'react-router-dom';

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

export async function productEditAction({ request, params }) {
  const formData = await request.formData();
  const data = new URLSearchParams({
    ticketId: params.id,
    title: formData.get('title'),
    place: formData.get('place'),
    price: formData.get('price'),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate'),
    contents: formData.get('contents'),
  });

  const token = getAuthToken();

  const response = await fetch(`${apiUrl}/api/tickets/modify`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
    body: data.toString(),
  });

  if (!response.ok) {
    return json(
      { error: 'Failed to update the ticket' },
      { status: response.status }
    );
  }

  return redirect('/product');
}

// 상품 등록 및 주문 승인 로직
export async function productAction({ request }) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  switch (intent) {
    case 'create-product':
      return handleCreateProduct(formData);
    case 'approve-orders':
      return handleApproveOrders(formData);
    case 'delete-product':
      const ticketId = formData.get('ticketId');
      return handleDeleteProduct(ticketId);
    default:
      throw new Response('Invalid action', { status: 400 });
  }
}

async function handleCreateProduct(formData) {
  const token = getAuthToken();

  // 'intent' 필드 제거
  formData.delete('intent');

  try {
    // 데이터 전송 (파일 포함)
    const response = await fetch(`${apiUrl}/api/tickets/regist`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData, // FormData 객체를 그대로 전송
    });

    if (!response.ok) {
      throw new Error('Failed to create product');
    }

    return response;
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
}

async function handleDeleteProduct(ticketId) {
  try {
    const token = getAuthToken(); // 인증 토큰이 필요한 경우
    const response = await fetch(
      `${apiUrl}/api/tickets/remove?ticketId=${ticketId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to delete product');
    }

    return redirect('/product'); // 삭제 후 리스트로 리디렉션
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}

// 주문 승인 처리 함수
async function handleApproveOrders(formData) {
  const approvedOrderIds = JSON.parse(formData.get('approvedOrderIds'));
  const token = getAuthToken();

  if (approvedOrderIds.length === 0) {
    return { success: false, message: 'No orders selected for approval' };
  }

  try {
    const response = await fetch(`${apiUrl}/api/orders/approve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(approvedOrderIds),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return redirect('/product');
  } catch (error) {
    return {
      success: false,
      message: 'Error approving orders',
      error: error.message,
    };
  }
}
