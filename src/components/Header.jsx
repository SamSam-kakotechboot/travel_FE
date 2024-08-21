import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CartIcon from './icons/CartIcon';
import AccountIcon from './icons/AccountIcon';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    // 현재 위치가 '/'가 아닌 경우에만 navigate 호출
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <div className="px-12">
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white w-full z-10 relative">
        <div
          className="text-black text-4xl font-poppins font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          SamSam
        </div>
        <div className="flex items-center gap-6">
          <CartIcon isClickable={true} onClick={() => navigate('/cart')} />
          <AccountIcon isClickable={true} onClick={() => navigate('/login')} />
        </div>
      </header>
    </div>
  );
}
