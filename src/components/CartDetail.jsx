import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../store/cartSlice';
import TrashCanIcon from './icons/TrashCanIcon';

export default function CartDetail() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = ticketId => {
    dispatch(increaseQuantity({ ticketId }));
  };

  const handleDecreaseQuantity = ticketId => {
    dispatch(decreaseQuantity({ ticketId }));
  };

  const handleRemoveFromCart = ticketId => {
    dispatch(removeFromCart({ ticketId }));
  };

  return (
    <div className="flex-1 bg-white py-3 px-5 rounded-2xl border border-gray-100">
      <div className="space-y-4">
        {cartItems.map((item, index, array) => (
          <CartItem
            key={item.ticketId}
            item={item}
            isLast={index === array.length - 1}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
}

function CartItem({
  item,
  isLast,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
}) {
  return (
    <div
      className={`flex w-full items-center gap-6 p-2 bg-white ${
        !isLast ? 'border-b border-gray-100' : ''
      }`}
    >
      <div className="bg-zinc-100 rounded-lg justify-center items-center flex">
        <img
          src={`https://via.placeholder.com/125x154?text=Item+${item.ticketId}`}
          alt={`Item ${item.ticketId}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-[154px] flex flex-col justify-between items-start w-[120px]">
        <div className="flex flex-col justify-start items-start gap-[2px]">
          <div className="text-black text-[20px] font-poppins font-bold break-words">
            {item.title}
          </div>
        </div>
        <div />
        <div className="text-black text-[24px] font-poppins font-extrabold break-words">
          {item.price.toLocaleString()} ₩
        </div>
      </div>
      <div className="flex-grow" />
      <div className="w-[225px] h-[180px] flex flex-col justify-between items-end">
        <TrashCanIcon
          isClickable={true}
          onClick={() => onRemoveFromCart(item.ticketId)}
        />
        <div className="quantity-button w-[170px] h-[56px] flex items-center rounded-full bg-[#F0F0F0] px-4">
          <button
            className="w-[40px] h-[40px] flex items-center justify-center text-2xl"
            onClick={() => onDecreaseQuantity(item.ticketId)}
          >
            -
          </button>
          <div className="quantity-display flex-1 text-xl italic text-center">
            {item.quantity}
          </div>
          <button
            className="w-[40px] h-[40px] flex items-center justify-center text-2xl"
            onClick={() => onIncreaseQuantity(item.ticketId)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
