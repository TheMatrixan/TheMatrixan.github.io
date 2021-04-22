import React, { SVGProps, VoidFunctionComponent } from 'react';

const Arrow: VoidFunctionComponent<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="499"
    height="43"
    viewBox="0 0 499 43"
    {...props}
    preserveAspectRatio="xMidYMid slice">
    <g fill="none" stroke="#fff" strokeLinecap="round">
      <path className="line" d="M1.231 19.825s151.651-42.171 255.216 0 172.154 15.923 241.8 0" strokeWidth="2" />
      <path className="tick" d="M493.731 28.583l5-9" />
      <path className="tick" d="M489.731 14.583l9 5" />
    </g>
  </svg>
);

export default Arrow;
