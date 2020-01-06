import React from 'react';
import cn from 'classnames';

interface HexagonProps {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  size?: number;
}

const Hexagon: React.FC<HexagonProps> = ({
  className = '',
  fill = 'none',
  stroke = 'none',
  strokeWidth,
  size,
}: HexagonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 138 122"
      className={cn('hex', className)}
      fill={`var(--${fill})`}
      stroke={`var(--${stroke})`}
      {...(size && { width: size })}
      {...(size && { height: size })}
      {...(strokeWidth && { strokeWidth })}
    >
      <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="none" />
      <path
        id="hexagon_full"
        d="m92.048739,10.833305l27.071812,46.656868l-27.071812,46.656868l-54.143624,0l-27.071812,-46.656868l27.071812,-46.656868l54.143624,0z"
      />
    </svg>
  );
};

export default Hexagon;
