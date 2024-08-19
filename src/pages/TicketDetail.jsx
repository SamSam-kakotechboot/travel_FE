import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TicketInfo from '../components/TicketInfo';
import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';
import { myPageLoader } from '../utils/loader'; // myPageLoader를 가져옵니다.

export default function TicketDetail() {
  const ticket = useLoaderData();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleReviewButtonClick = async () => {
    try {
      const orders = await myPageLoader();
      const matchingOrder = orders.find(
        order => order.ticketId === ticket.ticketId
      );
      if (matchingOrder) {
        setOrderId(matchingOrder.orderId);
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
              <ReviewForm id={ticket.ticketId} orderId={orderId} />
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
