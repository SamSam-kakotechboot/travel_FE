import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLoaderData } from 'react-router-dom';
import CartIcon from '../components/icons/CartIcon';
import ReviewIcon from '../assets/writing.svg';
import MyOrderList from '../components/MyOrderList';
import MyReviewList from '../components/MyReviewList';
import { eraseCookie } from '../utils/cookie';
import { clearCredentials } from '../store/authSlice';

export default function MyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, reviews } = useLoaderData(); // Destructure orders and reviews

  console.log(reviews);

  const handleLogout = () => {
    dispatch(clearCredentials());
    eraseCookie('token');
    navigate('/');
  };

  return (
    <div className="relative bg-white">
      <div className="flex flex-col min-h-screen bg-white py-12 px-20">
        <div className="flex items-center mb-8 mt-2">
          <button
            onClick={handleLogout}
            className="ml-auto bg-red-500 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div>
            <div className="flex items-center mb-4">
              <CartIcon className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-semibold">주문내역</h2>
            </div>
            <MyOrderList orders={orders} />
          </div>
          <div>
            <div className="flex items-center mb-4">
              <img
                src={ReviewIcon}
                alt="Review Icon"
                className="w-8 h-8 mr-3"
              />
              <h2 className="text-2xl font-semibold">리뷰내역</h2>
            </div>
            <MyReviewList reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
