import React from 'react';

const Header = () => {
  return (
    <div className="absolute w-[1380px] h-[93px] left-[29px] top-0 flex justify-center items-center gap-[40px]">
      <div className="text-black text-3xl font-bold font-poppins break-words">
        SamSam
      </div>
      <div className="flex-1 h-12 px-4 py-3 bg-gray-100 rounded-full flex items-center gap-3">
        <div className="relative w-6 h-6">
          <div className="absolute w-[20.27px] h-[20.27px] left-[1.86px] top-[1.86px] bg-black opacity-40"></div>
        </div>
        <div className="text-gray-400 text-base font-normal font-poppins break-words">
          Search for products...
        </div>
      </div>
      <div className="flex items-start gap-[14px]">
        <div className="relative w-6 h-6">
          <div className="absolute w-[22.13px] h-[20.25px] top-[1.88px] bg-black"></div>
        </div>
        <div className="relative w-6 h-6">
          <div className="absolute w-[20.25px] h-[20.25px] top-[1.88px] bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
