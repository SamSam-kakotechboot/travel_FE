import React from 'react';
import { useSelector } from 'react-redux';

export default function CartTotal() {
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="h-72 w-128 max-w-md mx-auto bg-white p-6 rounded-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">주문 정보</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-black/60 text-xl font-medium">Subtotal</span>
          <span className="text-black text-xl font-black">
            {totalAmount.toLocaleString()}₩
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-black/60 text-xl font-medium">
            Delivery Fee
          </span>
          <span className="text-black text-xl font-black">0₩</span>
        </div>
        <div className="border border-gray-100 my-4"></div>
        <div className="flex justify-between font-semibold">
          <span className="text-xl font-medium">Total</span>
          <span className="text-black text-2xl font-black">
            {totalAmount.toLocaleString()}₩
          </span>
        </div>
        <button className="w-full mt-6 bg-black text-white py-2 rounded-3xl flex justify-center items-center">
          결제하기 →
        </button>
      </div>
    </div>
  );
}
