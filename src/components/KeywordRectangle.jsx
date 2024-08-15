import React from 'react';

const KeywordRectangle = ({
  content,
  color,
  textcolor,
  width,
  padX,
  height,
}) => {
  const defaultColor = color ? color : `bg-[#CEE6FA]`;
  const defaultTextColor = textcolor ? textcolor : 'text-black';
  const minWidth = width ? width : 50;
  const paddingX = padX ? padX : 5;
  const paddingBottom = 2;
  const textWidth = content.length * 12;
  const dynamicWidth = Math.max(textWidth + paddingX * 2, minWidth);
  const defaultheight = height ? height : '24px';

  return (
    <div
      className={`keyword-rectangle flex items-center justify-center rounded-full ${defaultColor}`}
      style={{
        width: `${dynamicWidth}px`,
        height: defaultheight,
        padding: `0 ${paddingX}px ${paddingBottom}px`,
        whiteSpace: 'nowrap', // 텍스트가 줄 바꿈 없이 한 줄로 유지되도록 설정
      }}
    >
      <span className={`text-xs ${defaultTextColor} font-medium`}>
        {content}
      </span>
    </div>
  );
};

export default KeywordRectangle;
