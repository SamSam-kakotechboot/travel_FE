import React, { useState } from 'react';
import TrashCanIcon from './icons/TrashCanIcon';
import useDeleteReview from '../hooks/reviewsHook';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function MyReviewList({ reviews }) {
  const [deleteReviewId, setDeleteReviewId] = useState(null);
  const deleteReview = useDeleteReview();

  const handleDeleteClick = async reviewId => {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');

    if (confirmDelete) {
      const success = await deleteReview(reviewId);
      if (success) {
        alert('리뷰 및 리뷰와 관련된 이미지가 성공적으로 삭제되었습니다.');
        setDeleteReviewId(null); // 삭제 후 상태 초기화
        window.location.reload(); // 페이지 새로고침으로 삭제된 상태 반영
      } else {
        alert('삭제 중 문제가 발생했습니다.');
      }
    }
  };

  return (
    <div className="flex-1 bg-white p-3 rounded-lg border border-black border-opacity-10 min-w-144">
      <div className="space-y-4 min-w-160">
        {reviews.map((review, index) => {
          return (
            <div key={review.reviewId}>
              <div className="flex w-full items-start gap-4 p-3 bg-white rounded-lg">
                <div className="flex-shrink-0 w-[125px] h-[154px] rounded-lg flex justify-center items-center">
                  <img
                    src={`https://ktbsamsambucket.s3.ap-northeast-2.amazonaws.com/review/${review.reviewId}`}
                    alt={`Item ${review.reviewId}`}
                    className="block w-[125px] h-[154px] object-cover rounded-lg"
                    onError={e =>
                      (e.target.src = `https://ktbsamsambucket.s3.ap-northeast-2.amazonaws.com/no_image.png`)
                    } // 이미지 로드 실패 시 대체 이미지
                  />
                </div>
                <div className="flex flex-col w-full justify-start items-start px-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-black text-[18px] font-bold break-words flex-grow">
                      {review.ticketId}
                    </div>
                    <TrashCanIcon
                      onClick={() => handleDeleteClick(review.reviewId)}
                      isClickable={true}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="text-gray-500 text-[12px]">
                    {new Date(review.registDate).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    작성
                  </div>
                  <div className="text-black text-[14px] break-words mt-2">
                    {review.comment}
                  </div>
                </div>
              </div>
              {index < 1 && ( // 전체 개수에 따라 바뀌도록 수정 필요
                <div className="w-full h-px bg-black bg-opacity-10 opacity-50 mt-4" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
