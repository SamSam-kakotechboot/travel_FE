import React, { useState, useEffect } from 'react';
import { getTotalPages, getCurrentItems } from '../utils/pagination';
import HomeProduct from './HomeProduct';
import PageButtons from './PageButtons';
import ticketsData from '../testdata/ticket.json';

export default function Tickets() {
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 12;

  const totalPages = getTotalPages(ticketsData, ticketsPerPage);
  const currentTickets = getCurrentItems(
    ticketsData,
    currentPage,
    ticketsPerPage
  );

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 변경 시 스크롤을 맨 위로 이동
  }, [currentPage]);

  return (
    <div className="relative bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-start gap-3">
          {currentTickets.map((ticket, index) => (
            <HomeProduct key={ticket.ticketId} ticket={ticket} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <PageButtons
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
