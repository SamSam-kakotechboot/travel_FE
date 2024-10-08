import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import BlackButton from './BlackButton';
import Tooltip from './Tooltip';
import InfoIcon from './icons/InfoIcon';
import StarRating from './Star';
import useFetchImage from '../hooks/useFetchImage';
import useFetchKeywords from '../hooks/useFetchKeywords';
import AIReview from './AiReview';

const TicketInfo = ({ ticket }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const {
    imageSrc,
    loading: imageLoading,
    error: imageError,
  } = useFetchImage(apiUrl, `api/images/${ticket.title}.png`);

  const {
    keywords,
    loading: keywordsLoading,
    error: keywordsError,
  } = useFetchKeywords(ticket.title);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    if (!user) {
      alert('로그인한 후, 장바구니에 담을 수 있습니다.');
      return;
    }

    dispatch(addToCart({ ...ticket, quantity }));
    alert('장바구니에 담겼습니다.');
  };

  return (
    <div className="ticket-info-container flex flex-col items-center pt-[78px]">
      {/* Image and Info Section Container */}
      <div className="flex gap-16">
        {/* Left Image Container */}
        <div className="image-container w-[430px] h-[450px] rounded-lg object-cover">
          {imageLoading && <div>이미지를 불러오는 중...</div>}
          {imageError && <div>{imageError}</div>}
          {!imageLoading && !imageError && (
            <img
              id="imageElement"
              className="ticket-image w-[430px] h-[450px] rounded-lg object-cover"
              src={imageSrc}
              alt={ticket.title}
            />
          )}
        </div>

        {/* Right Info Section */}
        <div className="info-section flex flex-col justify-start min-w-[430px]">
          <div className="ticket-details w-[450px] h-[380px] flex flex-col relative">
            <div className="text-wrapper-ticket-name text-4xl font-bold text-black text-left">
              {ticket.title}
            </div>
            {/* Star Rating Section */}
            <div className="star-wrapper flex items-center mt-2 mb-[5px] h-[30px]">
              <StarRating rating={ticket.avgRating} />
              <span className="ml-2 text-black text-sm italic">
                {ticket.avgRating}/5.0
              </span>
            </div>
            <div className="text-wrapper-ticket-price text-2xl font-bold text-black mb-[10px] text-left">
              {parseInt(ticket.price).toLocaleString()} 원
            </div>
            <div className="text-wrapper-ticket-info text-base text-black mt-1 text-left">
              장소: {ticket.place}
            </div>
            <div className="text-wrapper-ticket-info text-base text-black mt-1 text-left">
              유효기간: {ticket.startDate} ~ {ticket.endDate}
            </div>
            <div className="keyword-wrapper flex flex-col mt-[8px] min-h-[50px] w-full bg-aquamarine-300">
              <div className="flex items-center mb-2">
                <div className="text-wrapper-ticket-keyword text-sm italic text-black text-left mr-2">
                  Keyword
                </div>
                <Tooltip text="외부 사용자 리뷰에서 AI를 통해 추출된 주요 키워드입니다">
                  <InfoIcon className="text-black cursor-pointer" />
                </Tooltip>
              </div>
              <AIReview
                keywordsLoading={keywordsLoading}
                keywordsError={keywordsError}
                keywords={keywords}
              />
            </div>
            <div className="text-wrapper-ticket-content text-base text-black/60 mt-4">
              {ticket.contents}
            </div>
          </div>
          <div className="gray-line w-full h-[1px] bg-gray-100 mt-5"></div>
          {/* Ticket Menu Section */}
          <div className="ticket-menu-wrapper flex gap-5 mt-[25px] flex-wrap justify-between">
            {/* Quantity Control */}
            <div className="quantity-wrapper flex items-center gap-2">
              <div className="quantity-button w-[170px] h-[56px] flex items-center rounded-full bg-[#F0F0F0] px-4">
                <button
                  className="w-[40px] h-[40px] flex items-center justify-center text-2xl"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <div className="quantity-display flex-1 text-xl italic text-center">
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
            <BlackButton
              width="300px"
              height="56px"
              text="장바구니 담기"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[75px]">
        <div className="gray-line w-[1200px] max-w-screen-xl h-[1px] bg-gray-100"></div>
      </div>
    </div>
  );
};

export default TicketInfo;
