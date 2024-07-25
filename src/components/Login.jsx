import Header from './Header';
import LoginModal from './LoginModal';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-grow w-full">
        {/* 로그인 모달: 전체 너비의 1/3 */}
        <div className="flex justify-center items-center flex-[3]">
          <LoginModal />
        </div>
        <div className="flex justify-center items-center flex-[7] bg-sky-50"></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
