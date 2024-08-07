import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TicketInfo from '../components/TicketInfo';
import Reviews from '../components/Reviews';
import ticketsData from '../testdata/ticket.json';
import ReviewForm from '../components/ReviewForm';

export default function TicketDetail() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    // id에 해당하는 티켓 데이터를 찾습니다.
    const ticketInfo = ticketsData.find(ticket => ticket.ticketId === id);
    setTicket(ticketInfo);
  }, [id]);

  const handleReviewButtonClick = () => {
    setShowReviewForm(true);
  };

  return (
    <div>
      <div className="relative bg-white min-h-">
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
