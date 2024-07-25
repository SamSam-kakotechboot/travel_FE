import Header from './Header';
import HomeProduct from './HomeProduct';

export default function Home() {
  return (
    <div className="relative bg-white min-h-">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="text-center text-black text-7xl font-poppins font-bold mb-40 mt-40">
          NEW ARRIVALS
        </div>
        <div className="flex flex-wrap justify-start gap-3">
          {[...Array(6)].map((_, index) => (
            <HomeProduct />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 text-black text-base font-poppins font-medium border border-gray-200 rounded-full hover:bg-gray-100">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
