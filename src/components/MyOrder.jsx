import Header from './Header';
import CartIcon from './icons/CartIcon';
import MyOrderList from './MyOrderList';

export default function MyOrder() {
  return (
    <div className="relative bg-white">
      <Header />
      <div className="flex flex-col min-h-screen bg-white p-8">
        <div className="flex items-center mb-8 mt-2">
          <CartIcon className="w-12 h-12 mr-3" />
          <h2 className="text-4xl font-semibold">OO님의 주문내역</h2>
        </div>
        <div className="w-full mx-auto flex gap-8 bg-white">
          <MyOrderList />
        </div>
      </div>
    </div>
  );
}
