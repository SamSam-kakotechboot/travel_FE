// src/hooks/reviewsHook.js
import { getCookie } from '../utils/cookie';

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

export default function useDeleteReview() {
  const deleteReview = async reviewId => {
    try {
      const reviewResponse = await fetch(
        `${apiUrl}/api/review/remove?reviewId=${reviewId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${getCookie('token')}`, // 쿠키에서 토큰 가져오기
            'Content-Type': 'application/json', // 필요시 추가
          },
        }
      );

      if (reviewResponse.ok) {
        const imageResponse = await fetch(
          `${apiUrl}/api/images/review/${reviewId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${getCookie('token')}`, // 쿠키에서 토큰 가져오기
              'Content-Type': 'application/json',
            },
          }
        );

        if (imageResponse.ok) {
          const message = await imageResponse.text();
          if (message === '파일이 존재하지 않거나 이미 삭제되었습니다.') {
            console.log('이미지 파일이 이미 존재하지 않거나 삭제되었습니다.');
          }
          return true; // 이미지 삭제(또는 존재하지 않음) 및 리뷰 삭제 모두 성공
        } else {
          console.error('이미지 삭제 실패');
          return false; // 이미지 삭제 실패 시 false 반환
        }
      } else {
        console.error('리뷰 삭제 실패');
        return false; // 리뷰 삭제 실패 시 false 반환
      }
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
      return false;
    }
  };

  return deleteReview;
}
