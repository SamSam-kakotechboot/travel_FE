import React from 'react';

export default function MyReviewList({ reviews }) {
  return (
    <div className="flex-1 bg-white p-3 rounded-lg border border-black border-opacity-10">
      <div className="space-y-4 min-w-160">
        {reviews.map((review, index) => (
          <div key={review.reviewId}>
            <div className="flex w-full items-start gap-4 p-3 bg-white rounded-lg">
              <div className="flex-shrink-0 w-[125px] h-[154px] rounded-lg flex justify-center items-center">
                <img
                  src={`https://via.placeholder.com/125x154?text=Item+${review.reviewId}`}
                  alt={`Item ${review.reviewId + 1}`}
                  className="block w-[125px] h-[154px] object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="text-black text-[18px] font-bold break-words">
                  {review.ticketId}
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
        ))}
      </div>
    </div>
  );
}
