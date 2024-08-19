// src/hooks/reviewsHook.js
const apiUrl = import.meta.env.VITE_API_BASE_URL;

export async function reviewsHook(ticketId) {
  try {
    const response = await fetch(
      `${apiUrl}/api/review/view/ticket?ticketId=${ticketId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    return data.data; // 필요한 데이터를 반환
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}
