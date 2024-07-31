import React from 'react';

export default function LoginButton({ isSignUpMode, toggleMode }) {
  return (
    <>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700"
        >
          {isSignUpMode ? '가입하기' : '로그인하기'}
        </button>
      </div>
      <div className="mt-6 text-center">
        <span className="text-gray-600 font-light font-poppins">
          {isSignUpMode ? '이미 가입하셨나요?' : '아직 가입 안하셨나요?'}
        </span>
        <a
          href="#"
          onClick={e => {
            e.preventDefault(); // 링크 기본 동작 방지
            toggleMode(); // 모드 전환 함수 호출
          }}
          className="ml-2 text-indigo-600 hover:text-indigo-500 font-semibold font-poppins"
        >
          {isSignUpMode ? '로그인하기' : '가입하기'}
        </a>
      </div>
    </>
  );
}
