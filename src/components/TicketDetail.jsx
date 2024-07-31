// src/components/TicketDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TicketInfo from './TicketInfo';
import Reviews from './Reviews';
import ticketsData from '../testdata/ticket.json'; // JSON 파일 가져오기

export default function TicketDetail() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // id에 해당하는 티켓 데이터를 찾습니다.
    const ticketInfo = ticketsData[id];
    setTicket(ticketInfo);
  }, [id]);

  return (
    <div>
      <div className="relative bg-white min-h-">
        {ticket ? (
          <>
            <TicketInfo ticket={ticket} />
            <Reviews ticketId={id} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
