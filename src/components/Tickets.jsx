import Header from './Header';
import HomeProduct from './HomeProduct';
import PageButtons from './PageButtons';

export default function Tickets() {
  return (
    <div className="relative bg-white min-h-">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-start gap-3">
          {[...Array(24)].map((_, index) => (
            <HomeProduct />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <PageButtons />
        </div>
      </div>
    </div>
  );
}
