import React, { useState } from 'react';
import LoginButton from './LoginButton';
import LoginId from './LoginId';
import LoginPassword from './LoginPassword';
import LoginRemember from './LoginRemember';
import LoginPhone from './LoginPhone';
import LoginName from './LoginName';

export default function LoginModal() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className="flex justify-between items-center max-w-md w-full p-4 bg-white shadow-md rounded-lg border">
      <div className="flex flex-col justify-center p-8 w-full">
        <h2 className="text-2xl font-light font-poppins mb-6">
          Welcome to SamSam!
        </h2>
        <h3 className="text-3xl font-bold font-noto mb-4 mt-2">
          {isSignUpMode ? '회원가입' : '로그인'}
        </h3>
        <div className="min-h-[50px]"></div>
        <form>
          <LoginId />
          {isSignUpMode && <LoginName />}
          {isSignUpMode && <LoginPhone />}
          <LoginPassword />
          {!isSignUpMode && <LoginRemember />}
          <LoginButton isSignUpMode={isSignUpMode} toggleMode={toggleMode} />
        </form>
      </div>
    </div>
  );
}
