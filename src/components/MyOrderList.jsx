import React from 'react';
import KeywordRectangle from './KeywordRectangle';

export default function MyOrderList() {
  return (
    <div className="flex-1 bg-white p-3 rounded-lg border border-black border-opacity-10">
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <div className="flex w-full items-center gap-6 p-3 bg-white rounded-lg">
              <div className="rounded-lg justify-center items-center flex">
                <img
                  src={`https://via.placeholder.com/125x154?text=Item+${index + 1}`}
                  alt={`Item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[118px] flex flex-col justify-between items-start">
                <div className="flex flex-col justify-start items-start gap-[2px]">
                  <div className="text-black text-xl font-bold break-words">
                    DisneyLand Paris
                  </div>
                  <div className="text-gray-500 text-[12px]">
                    2024.07.26 주문
                  </div>
                  <div className="text-gray-500 text-[12px]">1개</div>
                </div>
                <div />
                <div className="text-black text-xl font-extrabold break-words">
                  120,000 ₩
                </div>
              </div>
              <div className="flex-grow" />
              <div className="w-[225px] h-[124px] flex flex-col justify-center items-end mr-6">
                <KeywordRectangle
                  content="배송완료"
                  color="bg-red-400 bg-opacity-10"
                  textcolor="text-red-500"
                  padX={20}
                  height={30}
                />
              </div>
            </div>
            {index < 2 && ( // 전체 개수에 따라 바뀌도록 수정 필요
              <div className="w-full h-px bg-black bg-opacity-10 opacity-50 mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
