export default function CartTotal() {
  return (
    <div className="h-72 w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">주문 정보</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-black/60 text-xl font-medium">Subtotal</span>
          <span className="text-black text-xl font-black">212,000₩</span>
        </div>
        <div className="flex justify-between">
          <span className="text-black/60 text-xl font-medium">
            Delivery Fee
          </span>
          <span className="text-black text-xl font-black">0₩</span>
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="flex justify-between font-semibold">
          <span className="text-xl font-medium">Total</span>
          <span className="text-black text-2xl font-black">212,000₩</span>
        </div>
        <button className="w-full mt-6 bg-black text-white py-2 rounded-3xl flex justify-center items-center">
          결제하기 →
        </button>
      </div>
    </div>
  );
}
