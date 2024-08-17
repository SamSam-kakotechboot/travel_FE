import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BlackButton from './BlackButton';
import UploadButton from './UploadButton';
import GrayStarIcon from './icons/GrayStarIcon';
import { getCookie } from '../utils/cookie';
import { ticketDetailAction } from '../utils/actions';

const ReviewForm = ({ id, orderId }) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(5);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [inputText, setInputText] = useState('');
  const inputTextRef = useRef(null);
  const uploadedFileRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const maxLength = 300;

  const handleMouseEnter = index => {
    setHoveredStars(index);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  const handleClick = index => {
    setSelectedStars(index);
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      uploadedFileRef.current = file;
    }
  };

  const handleInputChange = e => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setInputText(text);
    }
  };

  const handleSubmit = async () => {
    const isConfirmed = window.confirm(
      '리뷰를 등록하시겠습니까? 작성한 리뷰는 수정 및 삭제가 불가능합니다.'
    );
    if (isConfirmed) {
      const reviewData = {
        userId: getCookie('userId'),
        ticketId: id,
        rating: selectedStars,
        comment: inputTextRef.current.value,
        orderId: orderId,
        image: uploadedFileRef.current,
      };

      const result = await dispatch(ticketDetailAction({ reviewData }));

      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/'); // 성공 시 홈으로 리다이렉트
      } else {
        console.error('리뷰 등록 실패:', result.payload);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="form-container w-[1200px] mt-[18px] mb-[50px]">
          <div className="flex items-center justify-between mb-[60px] ml-[18px] mr-[18px]">
            <div className="flex flex-col items-start">
              <h2 className="text-[19px] font-bold text-black mt-[12px]">
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
            <div>
              <BlackButton
                width="166px"
                height="48px"
                text="리뷰 등록"
                onClick={handleSubmit}
              />
            </div>
          </div>

          <div className="flex flex-col items-center mt-[30px]">
            <div className="w-[1000px] h-[400px] border border-gray-300 rounded-lg p-4">
              <textarea
                placeholder="리뷰를 입력하세요."
                ref={inputTextRef}
                value={inputText}
                onChange={handleInputChange}
                className="w-full h-[230px] border-none outline-none resize-none p-2"
              />
              <div className="text-gray-200 mt-[30px] mb-[30px]">
                ({inputText.length}/{maxLength})
              </div>
              <UploadButton
                onFileChange={handleFileChange}
                uploadedFileName={uploadedFileName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
