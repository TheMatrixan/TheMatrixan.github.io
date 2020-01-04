import React from 'react';
import { useIntl } from 'react-intl';

import Icons from 'assets/img/icons.svg';

interface IconProps {
  name: string;
  title?: string;
  fill?: string;
  stroke?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, fill = 'none', stroke = 'none', size = 24, title = '' }: IconProps) => {
  const { formatMessage } = useIntl();
  return (
    <span className={`icon icon-${name}`} title={title && formatMessage({ id: title })}>
      <svg fill={`var(--${fill})`} stroke={`var(--${stroke})`} width={size} height={size}>
        <use xlinkHref={`${Icons}#icon-${name}`} />
      </svg>
    </span>
  );
};

export default Icon;
