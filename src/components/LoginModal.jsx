export default function LoginModal() {
  return (
    <div className="flex justify-between items-center max-w-md w-full p-4 bg-white shadow-md rounded-lg border">
      <div className="flex flex-col justify-center p-8">
        <h2 className="text-2xl font-light font-poppins mb-6">
          Welcome to SamSam!
        </h2>
        <h3 className="text-3xl font-bold font-noto mb-4 mt-2">로그인</h3>
        <div className="min-h-[50px]"></div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700 font-poppins"
            >
              Id
            </label>
            <input
              id="id"
              name="id"
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[40px]"
              placeholder="아이디를 입력해주세요"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 font-poppins"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[40px]"
                placeholder="비밀번호를 입력해주세요"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.875 18.825A9.001 9.001 0 012.1 12H4a7 7 0 0014 0h1.9a9.001 9.001 0 01-6.025 6.825M9 12l2 2 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
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
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700"
            >
              로그인하기
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600 font-light font-poppins">
            아직 가입 안하셨나요?
          </span>
          <a
            href="#"
            className="ml-2 text-indigo-600 hover:text-indigo-500 font-semibold font-poppins"
          >
            가입하기
          </a>
        </div>
      </div>
    </div>
  );
}
