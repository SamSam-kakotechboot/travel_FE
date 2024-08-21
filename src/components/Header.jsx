import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartIcon from './icons/CartIcon';
import AccountIcon from './icons/AccountIcon';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="px-12">
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white w-full z-10 relative">
        <div
          className="text-black text-4xl font-poppins font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          SamSam
        </div>
        {/* <div className="flex flex-1 items-center bg-[#F0F0F0] rounded-full mx-8 px-4">
          <span className="material-icons text-gray-400 mr-2">search</span>
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 py-2 bg-transparent outline-none text-base font-poppins"
          />
        </div> */}
        <div className="flex items-center gap-6">
          <CartIcon isClickable={true} onClick={() => navigate('/cart')} />
          <AccountIcon isClickable={true} onClick={() => navigate('/login')} />
        </div>
      </header>
    </div>
  );
}
