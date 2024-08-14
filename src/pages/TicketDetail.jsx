import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TicketInfo from '../components/TicketInfo';
import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';

export default function TicketDetail() {
  const ticket = useLoaderData();
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleReviewButtonClick = () => {
    setShowReviewForm(true);
  };

  // console.log(ticket);

  return (
    <div>
      <div className="relative bg-white min-h-screen">
        {ticket ? (
          <>
            <TicketInfo ticket={ticket} />
            {showReviewForm ? (
              <ReviewForm id={ticket.ticketId} />
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
