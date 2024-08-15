import React from 'react';

const HalfStarIcon = props => (
  <svg
    className={`h-6 w-6 ${props.className}`}
    fill="none"
    viewBox="0 0 25 23"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.73719 22.4964L12 18.4557V0.143799L8.49932 7.68176L0.248535 8.68173L6.33579 14.3404L4.73719 22.4964Z"
      fill={props.fill || '#FFC633'}
    />
  </svg>
);

export default HalfStarIcon;
