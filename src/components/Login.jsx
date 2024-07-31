import LoginModal from './LoginModal';
import People from '../assets/discuss-idea.png';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-white ">
      <div className="flex flex-grow w-full px-20">
        {/* 로그인 모달: 전체 너비의 1/3 */}
        <div className="flex justify-center items-center min-w-[500px]">
          <LoginModal />
        </div>
        <div className="flex justify-center items-center min-w-[800px]">
          <img
            src={People}
            alt="discuss-idea"
            className="max-w-full max-h-full object-cover"
          />
        </div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
}
