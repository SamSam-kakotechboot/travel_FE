import React from 'react';
import Header from './Header';

export default function Cart() {
  return (
    <div className="relative bg-white">
      <Header />
      <div className="flex flex-col min-h-screen bg-white p-8">
        <div className="flex items-center mb-6 mt-2">
          <span className="material-icons text-black text-5xl mr-2">
            shopping_cart
          </span>
          <h2 className="text-4xl font-semibold">OO님의 장바구니</h2>
        </div>
        <div className="w-full mx-auto flex gap-8 bg-blue-100">
          {/* 왼쪽: 카트 정보 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              {/* Cart Item */}
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex w-full items-center gap-6 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className=" bg-zinc-100 rounded-lg justify-center items-center flex ">
                    <img
                      src={`https://via.placeholder.com/125x154?text=Item+${index + 1}`}
                      alt={`Item ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-[118px] flex flex-col justify-between items-start">
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
                  <div className="w-[225px] h-[124px] flex flex-col justify-between items-end">
                    <div className="w-[24px] h-[24px] relative">
                      <div className="absolute left-[3px] top-[1.5px] w-[18px] h-[19.5px] bg-[#FF3333]"></div>
                    </div>
                    <div className="px-[20px] py-[12px] bg-gray-200 rounded-full flex justify-center items-center gap-[20px]">
                      <div className="w-[20px] h-[20px] relative">
                        <div className="absolute left-[2.19px] top-[9.06px] w-[15.62px] h-[1.88px] bg-black"></div>
                      </div>
                      <div className="text-black text-[14px] font-poppins italic font-medium break-words">
                        1
                      </div>
                      <div className="w-[20px] h-[20px] relative">
                        <div className="absolute left-[2.19px] top-[2.19px] w-[15.62px] h-[15.62px] bg-black"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽: 결제 정보 */}
          <div className="h-72 w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">주문 정보</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-black/60 text-xl font-medium">
                  Subtotal
                </span>
                <span className="text-black text-xl font-black">212,000₩</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60 text-xl font-medium">
                  Delivery Fee
                </span>
                <span className="text-black text-xl font-black">0₩</span>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between font-semibold">
                <span className="text-xl font-medium">Total</span>
                <span className="text-black text-2xl font-black">212,000₩</span>
              </div>
              <button className="w-full mt-6 bg-black text-white py-2 rounded-3xl flex justify-center items-center">
                결제하기 →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
