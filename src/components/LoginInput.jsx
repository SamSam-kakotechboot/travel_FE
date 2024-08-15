import React from 'react';

export default function LoginInput({ inputRef, type, placeholder }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={type}
        className="block text-sm font-medium text-gray-700 font-poppins"
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </label>
      <input
        id={type}
        name={type}
        type="text"
        ref={inputRef}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[40px]"
        placeholder={placeholder}
      />
    </div>
  );
}
