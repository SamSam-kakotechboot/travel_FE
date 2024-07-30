import React from 'react';

const GrayStarIcon = props => (
  <svg
    width="35"
    height="32"
    viewBox="0 0 35 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    {...props}
  >
    <path
      d="M17.552 0.00012207L22.51 10.6761L34.1955 12.0923L25.5742 20.1067L27.8382 31.6579L17.552 25.9351L7.26576 31.6579L9.52984 20.1067L0.908512 12.0923L12.594 10.6761L17.552 0.00012207Z"
      fill={props.fill || '#DDE1E6'}
    />
  </svg>
);

export default GrayStarIcon;
