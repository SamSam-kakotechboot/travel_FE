import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './Star';
import useFetchImage from '../hooks/useFetchImage'; // 커스텀 훅을 import

export default function HomeProduct({ ticket }) {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // useFetchImage 훅을 사용하여 이미지를 비동기적으로 불러오기
  const { imageSrc, loading, error } = useFetchImage(
    apiUrl,
    `/ticket/${ticket.title}.png`
  );

  const handleProductClick = () => {
    navigate(`/tickets/${ticket.ticketId}`);
  };

  return (
    <div
      onClick={handleProductClick}
      className="flex flex-col items-center bg-background overflow-hidden w-[300px] h-auto p-4"
    >
      <div className="w-full h-[298px]">
        {loading && <div>이미지를 불러오는 중...</div>}
        {error && <div>{error}</div>}
        {!loading && !error && (
          <img
            className="w-full h-full object-cover rounded-xl"
            src={imageSrc}
            alt={ticket.title}
          />
        )}
      </div>
      <div className="text-black text-lg font-poppins font-bold mt-4">
        {ticket.title}
      </div>
      <div className="flex items-center gap-[2px] mt-2">
        <StarRating rating={ticket.avgRating} />
        <span className="text-black text-sm font-poppins font-normal ml-2">
          {ticket.avgRating}/5
        </span>
      </div>
      <div className="text-black text-2xl font-poppins font-semibold mt-2">
        {parseInt(ticket.price).toLocaleString()} 원
      </div>
    </div>
  );
}
