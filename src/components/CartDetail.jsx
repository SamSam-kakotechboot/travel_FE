import React, { useState } from 'react';
import TrashCanIcon from './icons/TrashCanIcon';

export default function CartDetail() {
  const initialQuantities = [1, 1, 1]; // 초기 수량 설정
  const [quantities, setQuantities] = useState(initialQuantities);

  const increaseQuantity = index => {
    setQuantities(prevQuantities =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  const decreaseQuantity = index => {
    setQuantities(prevQuantities =>
      prevQuantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  return (
    <div className="flex-1 bg-white py-3 px-5 rounded-lg border border-black border-opacity-10 ">
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex w-full items-center gap-6 p-2 bg-white border-b border-gray-100"
          >
            <div className="bg-zinc-100 rounded-lg justify-center items-center flex ">
              <img
                src={`https://via.placeholder.com/125x154?text=Item+${index + 1}`}
                alt={`Item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[154px] flex flex-col justify-between items-start ">
              <div className="flex flex-col justify-start items-start gap-[2px]">
                <div className="text-black text-[20px] font-poppins font-bold break-words">
                  DisneyLand Paris
                </div>
              </div>
              <div />
              <div className="text-black text-[24px] font-poppins font-extrabold break-words">
                120,000 ₩
              </div>
            </div>
            <div className="flex-grow" />
            <div className="w-[225px] h-[180px] flex flex-col justify-between items-end">
              <TrashCanIcon isClickable={true} onClick={() => {}} />
              <div className="quantity-button w-[170px] h-[56px] flex items-center rounded-full bg-[#F0F0F0] px-4">
                <button
                  className="w-[40px] h-[40px] flex items-center justify-center text-2xl"
                  onClick={() => decreaseQuantity(index)}
                >
                  -
                </button>
                <div className="quantity-display flex-1 text-xl italic text-center">
                  {quantities[index]}
                </div>
                <button
                  className="w-[40px] h-[40px] flex items-center justify-center text-2xl"
                  onClick={() => increaseQuantity(index)}
                >
                  +
                </button>
              </div>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
}
