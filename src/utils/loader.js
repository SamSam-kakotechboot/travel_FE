const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { getAuthToken } from './authAction';

export async function homeLoader({ request }) {
  const url = new URL(request.url);
  const pageNumber = url.searchParams.get('pageNumber') || 1;
  const pageSize = url.searchParams.get('pageSize') || 20;
  const keyword = url.searchParams.get('keyword')
    ? url.searchParams.get('keyword')
    : 'Latest'; // keyword 쿼리 파라미터 추가

  console.log(keyword);
  try {
    const response = await fetch(
      `${apiUrl}/api/tickets/view/all?pageNumber=${pageNumber}&pageSize=${pageSize}&keyword=${keyword}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch tickets');
    }
    const ticketData = await response.json();
    return ticketData.data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
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
