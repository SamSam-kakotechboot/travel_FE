import React from 'react';

export default function MyReviewList() {
  return (
    <div className="flex-1 bg-white p-3 rounded-lg border border-black border-opacity-10">
      <div className="space-y-4">
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            <div className="flex w-full items-start gap-4 p-3 bg-white rounded-lg">
              <div className="flex-shrink-0 w-[125px] h-[154px] rounded-lg flex justify-center items-center">
                <img
                  src={`https://via.placeholder.com/125x154?text=Item+${index + 1}`}
                  alt={`Item ${index + 1}`}
                  className="block w-[125px] h-[154px] object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="text-black text-[18px] font-bold break-words">
                  LEGOLAND KOREA
                </div>
                <div className="text-gray-500 text-[12px]">2024.07.26 작성</div>
                <div className="text-black text-[14px] break-words mt-2">
                  너무 재미있어요 어쩌고 저쩌고 너무 재미있어요 어쩌고 저쩌고
                  어쩌고 저쩌고 ...
                </div>
              </div>
            </div>
            {index < 1 && ( // 전체 개수에 따라 바뀌도록 수정 필요
              <div className="w-full h-px bg-black bg-opacity-10 opacity-50 mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
