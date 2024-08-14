const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { redirect } from 'react-router-dom';
import { getAuthToken } from './authAction';

export async function cartAction({ request }) {
  const formData = await request.formData();
  const orders = JSON.parse(formData.get('orders'));
  const totalAmount = formData.get('totalAmount');
  const token = getAuthToken();

  try {
    const response = await fetch(`${apiUrl}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 추가
      },
      body: JSON.stringify({
        orders,
        totalAmount: parseFloat(totalAmount),
      }),
    });

    if (!response.ok) {
      throw new Error('Order submission failed');
    }

    return redirect('/');
  } catch (error) {
    console.error('Order submission failed:', error);
    // 필요시 에러 처리 로직 추가
    return null;
  }
}
