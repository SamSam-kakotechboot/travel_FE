export default function LoginPhone() {
  return (
    <div className="mb-4">
      <label
        htmlFor="id"
        className="block text-sm font-medium text-gray-700 font-poppins"
      >
        Phone
      </label>
      <input
        id="id"
        name="id"
        type="text"
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[40px]"
        placeholder="전화번호를 입력해주세요"
      />
    </div>
  );
}
