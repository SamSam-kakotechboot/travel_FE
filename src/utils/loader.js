const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { getAuthToken } from './authAction';
import { json } from 'react-router-dom';
import { getUrlParams2, getUrlParams } from './urlParam';

// URL 파라미터를 처리하는 함수
function getQueryString(request) {
  const url = new URL(request.url);
  const params = getUrlParams(url.searchParams);
  return new URLSearchParams(params).toString();
}

// 티켓 데이터를 가져오는 함수
async function fetchTickets(queryString) {
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

  return response.json();
}

// 응답 데이터를 처리하는 함수
function processTicketData(responseData) {
  return {
    tickets: responseData.data.tickets,
    totalCount: responseData.data.totalItems,
  };
}

// 메인 로더 함수
export async function homeLoader({ request }) {
  try {
    const queryString = getQueryString(request);
    const responseData = await fetchTickets(queryString);
    const processedData = processTicketData(responseData);
    return json(processedData);
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
    const [ordersData, reviewsData] = await Promise.all([
      fetchOrders(token),
      fetchReviews(token),
    ]);

    return {
      orders: ordersData.data,
      reviews: reviewsData.data,
    };
  } catch (error) {
    console.error('Error fetching orders or reviews:', error);
    return { orders: null, reviews: null };
  }
}

export async function ProductLoader({ request }) {
  const token = getAuthToken();
  try {
    const [ticketsData, ordersData] = await Promise.all([
      fetchTickets(getQueryString(request)),
      fetchOrdersbyMaster(token),
    ]);

    return json({
      tickets: ticketsData.data.tickets,
      totalCount: ticketsData.data.totalItems,
      orders: ordersData.data,
    });
  } catch (error) {
    console.error('Error fetching tickets or reviews:', error);
    throw json({ message: 'Failed to fetch data' }, { status: 500 });
  }
}

// 주문 데이터 요청 함수
async function fetchOrders(token) {
  const response = await fetch(`${apiUrl}/api/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }
  return response.json();
}

// 리뷰 데이터 요청 함수
async function fetchReviews(token) {
  const response = await fetch(`${apiUrl}/api/review/view/my`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }
  return response.json();
}

async function fetchOrdersbyMaster(token) {
  const response = await fetch(`${apiUrl}/api/orders/master`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }
  return response.json();
}
