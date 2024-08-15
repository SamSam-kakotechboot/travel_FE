export default function LoginRemember() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <input
          id="remember_me"
          name="remember_me"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label
          htmlFor="remember_me"
          className="ml-2 block text-sm text-gray-900 font-noto mr-4"
        >
          이 기기에서 정보를 기억할게요
        </label>
      </div>
      <div className="text-sm">
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500 font-noto"
        >
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}
