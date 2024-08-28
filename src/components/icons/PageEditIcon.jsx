export default function PageEditIcon({ isClickable, onClick, className }) {
  const baseClass = 'inline-block'; // 기본 클래스 설정
  const appliedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={isClickable ? onClick : undefined} // isClickable이 true일 때만 onClick 핸들러 적용
      className={appliedClass}
      style={{ cursor: isClickable ? 'pointer' : 'default' }} // 클릭 가능한 경우 포인터 커서 적용
    >
      <g id="icon / iconoir / page-edit">
        <path
          id="Vector"
          d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11"
          stroke="#21272A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M8 14H11M8 10H16H8ZM8 6H12H8Z"
          stroke="#21272A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z"
          fill="#21272A"
          stroke="#21272A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M17.9542 16.9394L19.54 18.5252M17.9542 16.9394L18.9542 15.9394C19.3921 15.5015 20.1021 15.5015 20.54 15.9394C20.9779 16.3773 20.9779 17.0873 20.54 17.5252L19.54 18.5252L17.9542 16.9394ZM17.9542 16.9394L14.9631 19.9305C14.8132 20.0804 14.7148 20.2741 14.6822 20.4835L14.4395 22.0399L15.9958 21.7973C16.2053 21.7646 16.3989 21.6662 16.5488 21.5163L19.54 18.5252L17.9542 16.9394Z"
          stroke="#21272A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
