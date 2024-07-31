import { useState } from 'react';

export default function LoginPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <label
        htmlFor="id"
        className="block text-sm font-medium text-gray-700 font-poppins"
      >
        Password
      </label>
      <input
        id="password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        className="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[40px]"
        placeholder="비밀번호를 입력해주세요"
      />
      <div className="absolute inset-y-12 right-0 pr-3 flex items-center">
        <span onClick={togglePasswordVisibility} className="cursor-pointer">
          <span className="material-icons">
            {showPassword ? 'visibility' : 'visibility_off'}
          </span>
        </span>
      </div>
    </div>
  );
}
