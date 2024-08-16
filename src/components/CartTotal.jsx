import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSubmit, useNavigate } from 'react-router-dom';
import { cartAction } from '../utils/actions';

export default function CartTotal() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const submit = useSubmit();
  const navigate = useNavigate(); // useNavigate 훅 사용

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const formData = new FormData();
    formData.append(
      'orders',
      JSON.stringify(
        cartItems.map(item => ({
          productId: item.ticketId,
          quantity: item.quantity,
          subAmount: item.price * item.quantity,
        }))
      )
    );
    formData.append('totalAmount', totalAmount);

    const result = await dispatch(cartAction({ formData })); // Thunk 액션 호출

    if (cartAction.fulfilled.match(result)) {
      // 액션이 성공적으로 완료되었는지 확인
      navigate('/'); // 성공 시 홈으로 리다이렉트
    } else {
      console.error('Order submission failed'); // 실패 시 추가 처리
    }
  };

  return (
    <div className="h-72 w-128 max-w-lg mx-auto bg-white p-6 rounded-lg border border-gray-100">
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
        <button
          onClick={handleCheckout}
          className="w-full mt-6 bg-black text-white py-2 rounded-3xl flex justify-center items-center"
        >
          결제하기 →
        </button>
      </div>
    </div>
  );
}
