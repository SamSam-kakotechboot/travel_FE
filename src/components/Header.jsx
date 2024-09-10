import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Redux의 useSelector 훅을 사용
import CartIcon from './icons/CartIcon';
import AccountIcon from './icons/AccountIcon';
import ProductIcon from './icons/ProductIcon';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = useSelector(state => state.auth.role); // Redux에서 role 가져오기

  const handleLogoClick = () => {
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
          {role === 'MASTER' && (
            <ProductIcon
              isClickable={true}
              onClick={() => navigate('/product')}
            />
          )}
          <CartIcon isClickable={true} onClick={() => navigate('/cart')} />
          <AccountIcon isClickable={true} onClick={() => navigate('/login')} />
        </div>
      </header>
    </div>
  );
}
