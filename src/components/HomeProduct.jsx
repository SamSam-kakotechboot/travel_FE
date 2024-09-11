import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './Star';

export default function HomeProduct({ ticket }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/tickets/${ticket.ticketId}`);
  };

  return (
    <div
      onClick={handleProductClick}
      className="flex flex-col items-center bg-background overflow-hidden w-[300px] h-auto p-4"
    >
      <div className="w-full h-[298px]">
        {/* 이미지 URL을 S3에서 직접 불러오고, onerror를 사용해 오류 시 기본 이미지를 표시 */}
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`https://ktbsamsambucket.s3.ap-northeast-2.amazonaws.com/ticket/${ticket.title}.png`}
          alt={ticket.title}
          onError={e => (e.target.src = '/src/assets/no_image.png')} // 이미지 로드 실패 시 기본 이미지로 대체
        />
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
