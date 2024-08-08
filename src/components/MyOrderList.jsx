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
                  <div className="text-black text-[20px] font-bold break-words">
                    DisneyLand Paris
                  </div>
                </div>
                <div />
                <div className="text-black text-[24px] font-extrabold break-words">
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
            <div className="w-full h-px bg-black bg-opacity-10 opacity-50 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
