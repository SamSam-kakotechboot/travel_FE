import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './Header';
import TicketInfo from './TicketInfo';
import BlackButton from './BlackButton';
import GrayStarIcon from './icons/GrayStarIcon';
import UploadIcon from './icons/UploadIcon';

const ReviewForm = () => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);
  const [inputText, setInputText] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const fileInputRef = useRef(null);
  const maxLength = 300;
  const navigate = useNavigate();

  const handleMouseEnter = index => {
    setHoveredStars(index);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  const handleClick = index => {
    setSelectedStars(index);
    console.log(`Selected stars: ${index}`);
  };

  const handleChange = event => {
    if (event.target.value.length <= maxLength) {
      setInputText(event.target.value);
    }
  };

  const handleFileChange = event => {
    if (event.target.files.length > 0) {
      const fileName = event.target.files[0].name;
      setUploadedFileName(fileName);
      console.log(`Selected file: ${fileName}`);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = () => {
    const isConfirmed = window.confirm(
      '리뷰가 등록되었습니다. 확인을 누르면 홈 페이지로 이동합니다.'
    );
    if (isConfirmed) {
      navigate('/'); // Navigate to home page
    }
  };

  return (
    <div>
      <Header />
      <TicketInfo />
      <div className="flex justify-center">
        <div className="form-container w-[1200px] mt-[30px] mb-[50px]">
          {/* Header and Button Section */}
          <div className="flex items-center justify-between mb-[60px]">
            <div className="flex flex-col items-center ml-[50px]">
              <h2 className="text-2xl font-bold text-black ml-[13px]">
                상품은 만족하셨나요?
              </h2>
              <div className="star-container flex mt-[12px]">
                {[1, 2, 3, 4, 5].map(index => (
                  <GrayStarIcon
                    key={index}
                    className="mr-[5px] cursor-pointer"
                    fill={
                      index <= (hoveredStars || selectedStars)
                        ? '#FFC633'
                        : '#DDE1E6'
                    }
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                  />
                ))}
              </div>
            </div>
            <div className="mr-[60px]">
              <BlackButton
                width="166px"
                height="48px"
                text="리뷰 등록"
                onClick={handleSubmit}
              />
            </div>
          </div>

          {/* Text Box Section */}
          <div className="flex flex-col items-center mt-[30px]">
            <div className="w-[850px] h-[400px] border border-gray-300 rounded-lg p-4">
              <textarea
                placeholder="리뷰를 입력하세요."
                value={inputText}
                onChange={handleChange}
                className="w-full h-[230px] border-none outline-none resize-none p-2"
              />
              <div className="text-gray-200 mt-[30px]">
                ({inputText.length}/{maxLength})
              </div>
              <div className="flex items-center gap-[10px] mt-[30px]">
                <div
                  onClick={handleUploadClick}
                  className="flex items-center justify-center w-[190px] h-[40px] px-[15px] py-[5px] rounded-full bg-[#DDE1E6] cursor-pointer"
                >
                  <UploadIcon className="mr-[3px]" isClickable={false} />
                  <span className="text-[12px]">Upload a Picture</span>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                {uploadedFileName && (
                  <span className="text-gray-500 text-[12px]">
                    {uploadedFileName}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
