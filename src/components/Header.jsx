export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white shadow-md w-full">
      <div className="text-black text-4xl font-poppins font-bold">SamSam</div>
      <div className="flex flex-1 items-center bg-[#F0F0F0] rounded-full mx-8 px-4">
        <span className="material-icons text-gray-400 mr-2">search</span>
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 py-2 bg-transparent outline-none text-base font-poppins"
        />
      </div>
      <div className="flex items-center gap-6">
        <span className="material-icons text-black">shopping_cart</span>
        <span className="material-icons text-black">account_circle</span>
      </div>
    </header>
  );
}
