export default function HomeProduct() {
  return (
    <div className="flex flex-col items-center bg-background overflow-hidden w-[300px] h-auto p-4">
      <div className="w-full h-[298px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://via.placeholder.com/280x335"
          alt="DisneyLand Paris"
        />
      </div>
      <div className="text-black text-lg font-poppins font-bold mt-4">
        DisneyLand Paris
      </div>
      <div className="flex items-center gap-[2px] mt-2">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="material-icons text-yellow-500">
            star
          </span>
        ))}
        <span className="material-icons text-yellow-500">star_half</span>
        <span className="text-black text-sm font-poppins font-normal ml-2">
          4.5/5
        </span>
      </div>
      <div className="text-black text-2xl font-poppins font-semibold mt-2">
        120,000
      </div>
    </div>
  );
}
