import React from 'react';
import KeywordRectangle from './KeywordRectangle';

export default function MyOrderList({ orders }) {
  return (
    <div className="flex-1 bg-white p-3 rounded-lg border border-black border-opacity-10 min-w-160">
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div key={order.orderId}>
            <div className="flex w-full items-center gap-6 p-3 bg-white rounded-lg">
              <div className="flex-shrink-0 w-[125px] h-[154px] rounded-lg flex justify-center items-center">
                <img
                  src={`https://via.placeholder.com/125x154?text=Item+${index + 1}`}
                  alt={`Item ${index + 1}`}
                  className="block w-[125px] h-[154px] object-cover"
                />
              </div>
              <div className="h-[118px] flex flex-col justify-between items-start flex-shrink-0">
                <div className="flex flex-col justify-start items-start gap-[2px]">
                  <div className="text-black text-xl font-bold break-words">
                    {order.ticketTitle}
                  </div>
                  <div className="text-gray-500 text-[12px]">
                    {new Date(order.orderDate).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="text-gray-500 text-[12px]">
                    {order.quantity}개
                  </div>
                </div>
                <div className="text-black text-xl font-extrabold break-words">
                  {parseInt(order.totalAmount).toLocaleString()} ₩
                </div>
              </div>
              <div className="flex-grow" />
              <div className="w-[225px] h-[124px] flex flex-col justify-center items-end mr-6 flex-shrink-0 min-w-[150px]">
                <KeywordRectangle
                  content="배송완료"
                  color="bg-red-400 bg-opacity-10"
                  textcolor="text-red-500"
                  padX={20}
                  height={30}
                  className="max-w-full"
                />
              </div>
            </div>
            {index < orders.length - 1 && (
              <div className="w-full h-px bg-black bg-opacity-10 opacity-50 mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
