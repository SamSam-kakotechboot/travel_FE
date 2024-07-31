import Header from './Header';
import CartTotal from './CartTotal';
import CartIcon from './icons/CartIcon';
import CartDetail from './CartDetail';

export default function MyOrder() {
  return (
    <div className="relative bg-white">
      <div className="flex flex-col min-h-screen bg-white py-12 px-20">
        <div className="flex items-center mb-8 mt-2">
          <CartIcon className="w-12 h-12 mr-3" />
          <h2 className="text-4xl font-semibold">OO님의 장바구니</h2>
        </div>
        <div className="w-full mx-auto flex gap-8 bg-white">
          {/* 왼쪽: 카트 정보 */}
          <CartDetail />
        </div>
      </div>
    </div>
  );
}
