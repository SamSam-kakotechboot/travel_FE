import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../components/icons/CartIcon';
import MyOrderList from '../components/MyOrderList';
import { eraseCookie } from '../utils/cookie';
import { clearCredentials } from '../store/authSlice';

export default function MyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearCredentials());
    eraseCookie('token');
    navigate('/');
  };

  return (
    <div className="relative bg-white">
      <div className="flex flex-col min-h-screen bg-white py-12 px-20">
        <div className="flex items-center mb-8 mt-2">
          <CartIcon className="w-8 h-8 mr-3" />
          <h2 className="text-2xl font-semibold">OO님의 주문내역</h2>
          <button
            onClick={handleLogout}
            className="ml-auto bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="w-4/5 mx-2 flex gap-8 bg-white">
          <MyOrderList />
        </div>
      </div>
    </div>
  );
}
