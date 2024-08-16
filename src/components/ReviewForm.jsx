import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackButton from './BlackButton';
import UploadButton from './UploadButton';
import GrayStarIcon from './icons/GrayStarIcon';
import axios from 'axios'; // 서버로 요청을 보내기 위해 axios 사용

const ReviewForm = ({ id }) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(5);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [inputText, setInputText] = useState(''); // textarea의 글자수 추적을 위한 state
  const inputTextRef = useRef(null); // useRef로 텍스트 입력값을 참조
  const uploadedFileRef = useRef(null); // useRef로 파일 입력값을 참조
  const navigate = useNavigate();
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
      uploadedFileRef.current = file; // 파일 정보를 저장
    }
  };

  const handleInputChange = e => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      // 글자 수 제한
      setInputText(text);
    }
  };

  const handleSubmit = async () => {
    const isConfirmed = window.confirm(
      '리뷰를 등록하시겠습니까? 작성한 리뷰는 수정 및 삭제가 불가능합니다.'
    );
    if (isConfirmed) {
      const reviewText = inputTextRef.current.value;
      const selectedFile = uploadedFileRef.current;

      const formData = new FormData();
      formData.append('rating', selectedStars);
      formData.append('comment', reviewText);
      if (selectedFile) {
        formData.append('image', selectedFile);
      }
      console.log(id);
      // FormData의 내용을 출력
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // try {
      //   // 서버로 데이터를 전송하는 부분
      //   await axios.post('/api/reviews', formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   });

      //   navigate('/'); // 리뷰 등록 후 이동
      // } catch (error) {
      //   console.error('리뷰 등록 실패:', error);
      // }
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="form-container w-[1200px] mt-[18px] mb-[50px]">
          {/* Header and Button Section */}
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

          {/* Text Box Section */}
          <div className="flex flex-col items-center mt-[30px]">
            <div className="w-[1000px] h-[400px] border border-gray-300 rounded-lg p-4">
              <textarea
                placeholder="리뷰를 입력하세요."
                ref={inputTextRef}
                value={inputText} // state에 저장된 값 사용
                onChange={handleInputChange} // 변경 이벤트 처리
                className="w-full h-[230px] border-none outline-none resize-none p-2"
              />
              <div className="text-gray-200 mt-[30px] mb-[30px]">
                ({inputText.length}/{maxLength}) {/* 글자 수 표시 */}
              </div>
              <UploadButton
                onFileChange={handleFileChange} // 파일 변경 처리
                uploadedFileName={uploadedFileName} // 업로드된 파일 이름 표시
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
