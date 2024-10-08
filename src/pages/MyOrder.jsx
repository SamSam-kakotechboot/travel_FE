import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../components/icons/CartIcon';
import MyOrderList from '../components/MyOrderList';
import { clearCredentials } from '../store/authSlice';

export default function MyOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(clearCredentials());
    navigate('/');
  };

  return (
    <div className="relative bg-white">
      <div className="flex flex-col min-h-screen bg-white p-8">
        <div className="flex items-center mb-8 mt-2">
          <CartIcon className="w-12 h-12 mr-3" />
          <h2 className="text-4xl font-semibold">{`${user.name}님의 주문내역`}</h2>
          <button
            onClick={handleLogout}
            className="ml-auto bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="w-full mx-auto flex gap-8 bg-white">
          <MyOrderList />
        </div>
      </div>
    </div>
  );
}
