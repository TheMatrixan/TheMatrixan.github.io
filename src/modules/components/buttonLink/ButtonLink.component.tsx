import Link from '@components/link/Link.component';
import { IProps as ILinkProps } from '@components/link/Link.component';
import Spinner from '@components/spinner/Spinner.component';
import clsx from 'clsx';
import React, { Fragment, memo } from 'react';
import { useIntl } from 'react-intl';

import styles from './ButtonLink.module.scss';

export enum ButtonLinkVariants {
  Primary = 'primary',
}

interface IProps extends Omit<ILinkProps, 'to'> {
  href: string;
  title: string;
  isLoading?: boolean;
  className?: string;
  target?: string;
  variant?: ButtonLinkVariants;
}

const ButtonLink: React.FC<IProps> = ({
  title,
  href,
  className = '',
  target = '',
  isLoading = false,
  variant = ButtonLinkVariants.Primary,
  ...props
}: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <Link
      {...props}
      to={href}
      target={target}
      className={clsx(styles.btn, styles[variant], className)}
      title={formatMessage({ id: title })}>
      {variant === ButtonLinkVariants.Primary && (
        <Fragment>
          <span className={clsx(styles['primary-hex'], styles['primary-hex_top-right'])} />
          <span className={clsx(styles['primary-hex'], styles['primary-hex_bottom-right'])} />
          <span className={clsx(styles['primary-hex'], styles['primary-hex_top-left'])} />
          <span className={clsx(styles['primary-hex'], styles['primary-hex_bottom-left'])} />
        </Fragment>
      )}
      {isLoading ? <Spinner /> : formatMessage({ id: title })}
    </Link>
  );
};

export default memo(ButtonLink);
