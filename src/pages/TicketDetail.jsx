import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TicketInfo from '../components/TicketInfo';
import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';
import { myPageLoader } from '../utils/loader'; // myPageLoader를 가져옵니다.

export default function TicketDetail() {
  const ticket = useLoaderData();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewId, setReviewId] = useState(null); // reviewId를 위한 상태를 추가합니다.

  const handleReviewButtonClick = async () => {
    try {
      const orders = await myPageLoader(); // 주문 내역을 불러옵니다.
      const matchingOrder = orders.find(
        order => order.ticketId === ticket.ticketId
      );

      if (matchingOrder) {
        setReviewId(matchingOrder.reviewId); // 일치하는 주문이 있으면 reviewId를 설정합니다.
        setShowReviewForm(true);
      } else {
        alert('구매 후 리뷰 작성이 가능합니다');
        setShowReviewForm(false);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('리뷰를 작성할 수 없습니다. 나중에 다시 시도해 주세요.');
    }
  };

  return (
    <div>
      <div className="relative bg-white min-h-screen">
        {ticket ? (
          <>
            <TicketInfo ticket={ticket} />
            {showReviewForm ? (
              <ReviewForm id={ticket.ticketId} reviewId={reviewId} /> // reviewId를 ReviewForm에 전달합니다.
            ) : (
              <Reviews
                id={ticket.ticketId}
                onReviewButtonClick={handleReviewButtonClick}
              />
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
