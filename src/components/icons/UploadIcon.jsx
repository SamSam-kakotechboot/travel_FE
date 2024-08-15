import React from 'react';

const UploadIcon = ({ isClickable = false, onClick, className }) => {
  // 기본 클래스 설정
  const baseClass = 'inline-block';
  // 주어진 className을 기본 클래스에 추가
  const appliedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 22 22"
      fill="none"
      onClick={isClickable ? onClick : null}
      style={{ cursor: isClickable ? 'pointer' : 'default' }}
      className={appliedClass}
    >
      <path
        d="M11 2L11 14M11 2C10.2122 2 8.74047 4.39316 8.1875 5M11 2C11.7878 2 13.2595 4.39316 13.8125 5"
        stroke="#141B34"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16.4C20 19.3784 19.4173 20 16.625 20H5.375C2.58275 20 2 19.3784 2 16.4"
        stroke="#141B34"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UploadIcon;
