import React from 'react';
import { useNavigate } from 'react-router-dom';
import ForbiddenImage from '../assets/Forbidden.png'; // 이미지 경로 불러오기

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src={ForbiddenImage} alt="Error Icon" className="w-24 h-24 mb-5" />
      <h1 className="text-2xl font-bold mb-3">404 Not Found</h1>
      <p className="text-base mb-5">
        "페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다."
      </p>
      <button
        onClick={handleGoHome}
        className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
