import React from 'react';

const KeywordRectangle = ({ content }) => {
  const minWidth = 50;
  const paddingX = 5;
  const paddingBottom = 2;
  const textWidth = content.length * 12;
  const dynamicWidth = Math.max(textWidth + paddingX * 2, minWidth);

  return (
    <div
      className="keyword-rectangle flex items-center justify-center rounded-full bg-[#CEE6FA]"
      style={{
        width: `${dynamicWidth}px`,
        height: '24px',
        padding: `0 ${paddingX}px ${paddingBottom}px`,
        whiteSpace: 'nowrap', // 텍스트가 줄 바꿈 없이 한 줄로 유지되도록 설정
      }}
    >
      <span className="text-xs text-black font-medium">{content}</span>
    </div>
  );
};

export default KeywordRectangle;
