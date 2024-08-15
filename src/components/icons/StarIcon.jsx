import React from 'react';

const StarIcon = props => (
  <svg
    className={`h-6 w-6 ${props.className}`}
    width={props.width || '25'}
    height={props.height || '23'}
    viewBox="0 0 25 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.3562 0.143799L15.8569 7.68176L24.1077 8.68173L18.0204 14.3404L19.619 22.4964L12.3562 18.4557L5.09341 22.4964L6.69201 14.3404L0.604756 8.68173L8.85555 7.68176L12.3562 0.143799Z"
      fill={props.fill || '#FFC633'}
    />
  </svg>
);

export default StarIcon;
