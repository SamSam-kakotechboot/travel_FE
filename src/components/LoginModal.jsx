import React from 'react';
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';
import LoginRemember from './LoginRemember';
import LoginHook from '../hooks/loginHook';
import { apiRequest } from '../hooks/loginApi';

export default function LoginModal() {
  const { isSignUpMode, formData, setRef, toggleMode, updateFormData } =
    LoginHook();

  const onSubmit = e => {
    e.preventDefault();
    updateFormData(updatedData => {
      console.log(updatedData);
      // apiRequest(isSignUpMode, updatedData).then(() => {
      // });
      console.log('api 전송!!');
    });
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
        <form onSubmit={onSubmit}>
          <LoginInput
            inputRef={setRef('id')}
            type="id"
            placeholder="아이디를 입력해주세요"
          />
          {isSignUpMode && (
            <>
              <LoginInput
                inputRef={setRef('name')}
                type="name"
                placeholder="이름을 입력해주세요"
              />
              <LoginInput
                inputRef={setRef('phone')}
                type="phone"
                placeholder="전화번호를 입력해주세요"
              />
            </>
          )}
          <LoginInput
            inputRef={setRef('password')}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          {!isSignUpMode && <LoginRemember inputRef={setRef('remember')} />}
          <LoginButton isSignUpMode={isSignUpMode} toggleMode={toggleMode} />
        </form>
      </div>
    </div>
  );
}
