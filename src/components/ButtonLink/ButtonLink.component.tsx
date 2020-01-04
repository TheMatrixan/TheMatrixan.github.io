import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useIntl } from 'react-intl';

import Spinner from 'components/Spinner';

import styles from './ButtonLink.module.scss';

export enum ButtonLinkVariants {
  Primary = 'btn-primary',
}

interface ButtonLinkProps {
  href: string;
  title: string;
  loading?: boolean;
  className?: string;
  variant?: ButtonLinkVariants;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  title,
  href,
  className = '',
  loading = false,
  variant = ButtonLinkVariants.Primary,
}: ButtonLinkProps) => {
  const { formatMessage } = useIntl();
  return (
    <Link to={href} className={cn(styles[variant], variant, className, 'btn')} title={formatMessage({ id: title })}>
      {variant === ButtonLinkVariants.Primary && (
        <>
          <span className="btn-primary-hex btn-primary-hex--top-right"></span>
          <span className="btn-primary-hex btn-primary-hex--bottom-right"></span>
          <span className="btn-primary-hex btn-primary-hex--top-left"></span>
          <span className="btn-primary-hex btn-primary-hex--bottom-left"></span>
        </>
      )}
      {loading ? <Spinner /> : formatMessage({ id: title })}
    </Link>
  );
};

export default ButtonLink;
