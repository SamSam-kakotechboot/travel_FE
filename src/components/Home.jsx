import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeProduct from './HomeProduct';
import ticketsData from '../testdata/ticket.json'; // JSON 파일 가져오기

export default function Home() {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 객체의 값을 배열로 변환
    const ticketsArray = Object.values(ticketsData);
    // 첫 4개의 데이터 선택
    const firstFourTickets = ticketsArray.slice(0, 4);
    setTickets(firstFourTickets);
  }, []);

  return (
    <div className="relative bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="text-center text-black text-7xl font-poppins font-bold mb-40 mt-40">
          NEW ARRIVALS
        </div>
        <div className="flex flex-wrap justify-start gap-3">
          {tickets.map(ticket => (
            <HomeProduct key={ticket.ticketId} ticket={ticket} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-3 text-black text-base font-poppins font-medium border border-gray-200 rounded-full hover:bg-gray-100"
            onClick={() => navigate('/tickets')}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
