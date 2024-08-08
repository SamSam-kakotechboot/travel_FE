import React, { useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import TicketInfo from '../components/TicketInfo';
import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';

export default function TicketDetail() {
  const ticket = useLoaderData();
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleReviewButtonClick = () => {
    setShowReviewForm(true);
  };

  return (
    <div>
      <div className="relative bg-white min-h-screen">
        {ticket ? (
          <>
            <TicketInfo ticket={ticket} />
            {showReviewForm ? (
              <ReviewForm id={ticket.ticketID} />
            ) : (
              <Reviews
                id={ticket.ticketID}
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
