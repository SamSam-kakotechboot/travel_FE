import Header from './Header';
import HomeProduct from './HomeProduct';

export default function Home() {
  return (
    <div className="relative bg-white min-h-screen">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="text-center text-black text-7xl font-poppins font-bold mb-40 mt-40">
          NEW ARRIVALS
        </div>
        <div className="flex flex-wrap justify-start gap-4">
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

{
  /* <div className="absolute flex items-center gap-[13px] left-[315px] top-[469px] w-[129.20px] h-[21px]">
<div className="flex items-start gap-[5.31px]">
  <div className="w-[8.79px] h-[16.72px] bg-primary"></div>
</div>
<div>
  <span className="text-black text-sm font-poppins font-normal">
    3.5/
  </span>
  <span className="text-secondary text-sm font-poppins font-normal">
    5
  </span>
</div>
</div>
<div className="absolute flex items-center gap-[13px] left-[630px] top-[469px] w-[153px] h-[21px]">
<div className="flex items-start gap-[5.31px]">
  <div className="w-[8.79px] h-[16.72px] bg-primary"></div>
</div>
<div>
  <span className="text-black text-sm font-poppins font-normal">
    4.5/
  </span>
  <span className="text-secondary text-sm font-poppins font-normal">
    5
  </span>
</div>
</div>
<div className="absolute flex items-center gap-[13px] left-[945px] top-[469px] w-[153px] h-[21px]">
<div className="flex items-start gap-[5.31px]">
  <div className="w-[8.79px] h-[16.72px] bg-primary"></div>
</div>
<div>
  <span className="text-black text-sm font-poppins font-normal">
    4.5/
  </span>
  <span className="text-secondary text-sm font-poppins font-normal">
    5
  </span>
</div>
</div>

<div className="absolute bg-background rounded-[20px] overflow-hidden left-[315px] top-[120px] w-[295px] h-[298px]">
<img
  className="absolute w-[338px] h-[337px] left-[-19px] top-0"
  src="https://via.placeholder.com/338x337"
  alt="LEGOLAND KOREA"
/>
</div>
<div className="absolute bg-background rounded-[20px] overflow-hidden left-[630px] top-[120px] w-[295px] h-[298px]">
<img
  className="absolute w-[311px] h-[298px] left-0 top-0"
  src="https://via.placeholder.com/311x298"
  alt="LOTTEWORLD"
/>
</div>
<div className="absolute bg-background rounded-[20px] overflow-hidden left-[945px] top-[120px] w-[295px] h-[298px]">
<img
  className="absolute w-[295px] h-[371px] left-0 top-[-36px]"
  src="https://via.placeholder.com/295x371"
  alt="OceanWorld"
/>
</div>
<div className="absolute text-black text-lg font-poppins font-bold left-[315px] top-[432px]">
LEGOLAND KOREA
</div>
<div className="absolute text-black text-lg font-poppins font-bold left-[630px] top-[432px]">
LOTTEWORLD
</div>
<div className="absolute text-black text-lg font-poppins font-bold left-[945px] top-[432px]">
OceanWorld
</div>
<div className="absolute flex items-center gap-[10px] left-[315px] top-[496px] w-[84px] h-[36px]">
<div className="text-black text-2xl font-poppins font-semibold">
  56,000
</div>
</div>
<div className="absolute w-[1240px] h-0 border border-[rgba(0, 0, 0, 0.10)] top-[680px]"></div>
</div>
<div className="absolute flex items-center gap-[10px] left-[730px] top-[675px]">
<div className="text-black text-2xl font-poppins font-semibold">
36,000
</div>
</div>
<div className="absolute flex items-center gap-[10px] left-[1045px] top-[675px]">
<div className="text-black text-2xl font-poppins font-semibold">
110,000
</div> */
}
