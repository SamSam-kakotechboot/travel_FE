import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarIcon from './icons/StarIcon';
import HalfStarIcon from './icons/HalfStarIcon';
import disneylandImage from '../assets/disneyland.png'; // 이미지 파일 import
import StarRating from './Star';

export default function HomeProduct({ ticket }) {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/tickets/${ticket.ticketID}`);
  };

  return (
    <div
      onClick={handleProductClick}
      className="flex flex-col items-center bg-background overflow-hidden w-[300px] h-auto p-4"
    >
      <div className="w-full h-[298px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={disneylandImage}
          alt="disneyland"
        />
      </div>
      <div className="text-black text-lg font-poppins font-bold mt-4">
        {ticket.title}
      </div>
      <div className="flex items-center gap-[2px] mt-2">
        <StarRating rating={ticket.rating} />
        <span className="text-black text-sm font-poppins font-normal ml-2">
          {ticket.rating}/5
        </span>
      </div>
      <div className="text-black text-2xl font-poppins font-semibold mt-2">
        {parseInt(ticket.price).toLocaleString()} 원
      </div>
    </div>
  );
}
