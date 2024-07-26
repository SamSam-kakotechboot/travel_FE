import React, { useState } from 'react';
import StarIcon from './icons/StarIcon';
import HalfStarIcon from './icons/HalfStarIcon';
import InfoIcon from './icons/InfoIcon';
import KeywordRectangle from './KeywordRectangle'; // 새 컴포넌트 임포트

const TicketInfo = ({ id }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="ticket-info-container flex justify-center items-center pt-[78px]">
      {/* Left Image Container */}
      <div className="image-container mr-16">
        <img
          className="ticket-image w-[430px] h-[460px] rounded-lg object-cover"
          src="https://via.placeholder.com/280x335"
          alt="DisneyLand Paris"
        />
      </div>

      {/* Right Info Section */}
      <div className="info-section flex flex-col justify-start min-w-[430px]">
        <div className="ticket-details w-[450px] h-[380px] flex flex-col relative">
          <div className="text-wrapper-ticket-name text-4xl font-bold text-black text-left">
            DisneyLand Paris
          </div>
          {/* Star Rating Section */}
          <div className="star-wrapper flex items-center mt-2 mb-[5px] h-[30px]">
            <div className="star-wrapper flex items-center">
              <StarIcon className="mr-[3px]" />
              <StarIcon className="mr-[3px]" />
              <StarIcon className="mr-[3px]" />
              <StarIcon className="mr-[3px]" />
              <HalfStarIcon />
            </div>
            <span className="ml-2 text-black text-sm italic">4.5/5.5</span>
          </div>
          <div className="text-wrapper-ticket-price text-2xl font-bold text-black mb-[10px] text-left">
            120,000
          </div>
          <div className="text-wrapper-ticket-info text-base text-black mt-1 text-left">
            장소: DisneyLand Paris
          </div>
          <div className="text-wrapper-ticket-info text-base text-black mt-1 text-left">
            유효기간: 2024/07/24 ~ 2025/03/02
          </div>
          <div className="keyword-wrapper flex flex-col mt-[8px] min-h-[50px] w-full bg-aquamarine-300">
            <div className="flex items-center mb-2">
              <div className="text-wrapper-ticket-keyword text-sm italic text-black text-left mr-2">
                Keyword
              </div>
              <InfoIcon className="text-black" />
            </div>
            <div className="keyword-rectangle-container flex gap-2">
              <KeywordRectangle content="풍경" />
              <KeywordRectangle content="명소" />
              <KeywordRectangle content="가성비" />
              <KeywordRectangle content="라라라라라라" />
            </div>
          </div>
          <div className="text-wrapper-ticket-content text-base text-black/60 mt-3 mb-10">
            디즈니랜드 파리에서 환상의 경험을 하세요!
            <br />
            어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고
            저쩌고 어쩌고 저쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고
            저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고
            어쩌고 저쩌고 어쩌고 저쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 ...
          </div>
        </div>
        <div className="gray-line w-full h-[1px] bg-gray-300 mt-5"></div>
        {/* Ticket Menu Section */}
        <div className="ticket-menu-wrapper flex gap-5 mt-6 flex-wrap justify-between">
          {/* Quantity Control */}
          <div className="quantity-wrapper flex items-center gap-2">
            <div className="quantity-button w-[170px] h-[56px] flex items-center rounded-full bg-[#F0F0F0] px-4">
              <button
                className="w-[40px] h-[40px] flex items-center justify-center text-2xl"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <div className="quantity-display flex-1 text-xl text-sm italic text-center">
                {quantity}
              </div>
              <button
                className="w-[40px] h-[40px] flex items-center justify-center text-2xl"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <button className="cart-button w-[300px] h-[56px] px-[54px] py-[16px] flex justify-center items-center gap-3 rounded-full bg-black text-white">
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
