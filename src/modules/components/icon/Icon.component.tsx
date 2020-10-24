import React from 'react';
import { useIntl } from 'react-intl';

interface IconProps {
  name: string;
  title?: string;
  fill?: string;
  className?: string;
  stroke?: string;
  size?: number;
}

const Icons = '/assets/images/icons.svg';

const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  fill = 'none',
  stroke = 'none',
  size = 24,
  title = '',
}: IconProps) => {
  const { formatMessage } = useIntl();

  return (
    <span className={`icon icon-${name} ${className}`} title={title && formatMessage({ id: title })}>
      <svg fill={`var(--${fill})`} stroke={`var(--${stroke})`} width={size} height={size}>
        <use xlinkHref={`${Icons}#icon-${name}`} />
      </svg>
    </span>
  );
};

export default Icon;
