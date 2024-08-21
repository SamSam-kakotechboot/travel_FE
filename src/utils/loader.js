const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { getAuthToken } from './authAction';
import { json } from 'react-router-dom';
import { getUrlParams } from './urlParam';

export async function homeLoader({ request }) {
  const url = new URL(request.url);
  const params = getUrlParams(url.searchParams);

  const queryString = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${apiUrl}/api/tickets/view/all?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return json({
      tickets: responseData.data.tickets,
      totalCount: responseData.data.totalItems,
    });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw json({ message: 'Failed to fetch tickets' }, { status: 500 });
  }
}
// /api/tickets/view/detail/{ticketId}

export async function ticketLoader({ params }) {
  const { id } = params; // params에서 ticket ID 추출
  try {
    const response = await fetch(
      `${apiUrl}/api/tickets/view/detail?ticketId=${id}`,
      {
        method: 'GET',
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ticket with ID ${id}`);
    }

    const ticket = await response.json(); // JSON 데이터를 ticket 변수에 할당
    return ticket.data;
  } catch (error) {
    console.error('Error fetching ticket:', error);
    throw new Error(`Ticket with ID ${id} not found`); // 에러 메시지 출력 및 다시 던지기
  }
}

export async function myPageLoader() {
  const token = getAuthToken();

  try {
    // Making two API requests concurrently
    const [ordersResponse, reviewsResponse] = await Promise.all([
      fetch(`${apiUrl}/api/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      fetch(`${apiUrl}/api/review/view/my`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    ]);

    // Check if both requests were successful
    if (!ordersResponse.ok || !reviewsResponse.ok) {
      throw new Error('Failed to fetch orders or reviews');
    }

    // Parse JSON responses
    const ordersData = await ordersResponse.json();
    const reviewsData = await reviewsResponse.json();

    // Return both pieces of data
    return {
      orders: ordersData.data, // Assuming the response structure contains the data you need
      reviews: reviewsData.data, // Adjust as necessary
    };
  } catch (error) {
    console.error('Error fetching orders or reviews:', error);
    return { orders: null, reviews: null }; // Return null for both if there was an error
  }
}
