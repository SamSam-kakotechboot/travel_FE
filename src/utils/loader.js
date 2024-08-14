const apiUrl = import.meta.env.VITE_API_BASE_URL;

export async function homeLoader({ request }) {
  // URLSearchParams를 사용하여 현재 요청의 쿼리 파라미터를 가져옵니다.
  const url = new URL(request.url);
  const pageNumber = url.searchParams.get('pageNumber') || 1; // 기본값: 1
  const viewNumber = url.searchParams.get('viewNumber') || 15; // 기본값: 15

  try {
    const response = await fetch(
      `${apiUrl}/tickets/view/all?pageNumber=${pageNumber}&viewNumber=${viewNumber}`,
      {
        method: 'GET',
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch tickets');
    }

    const ticketData = await response.json(); // JSON 데이터를 ticketData 변수에 할당
    return ticketData; // 받아온 데이터를 반환
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error; // 에러 발생 시 호출한 쪽으로 에러를 던짐
  }
}

export async function ticketLoader({ params }) {
  const { id } = params; // params에서 ticket ID 추출
  try {
    const response = await fetch(`${apiUrl}/tickets/view/detail/${id}`, {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ticket with ID ${id}`);
    }

    const ticket = await response.json(); // JSON 데이터를 ticket 변수에 할당
    return ticket; // 받아온 데이터를 반환
  } catch (error) {
    console.error('Error fetching ticket:', error);
    throw new Error(`Ticket with ID ${id} not found`); // 에러 메시지 출력 및 다시 던지기
  }
}
