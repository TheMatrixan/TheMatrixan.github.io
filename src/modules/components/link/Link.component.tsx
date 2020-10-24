import { BASE_LANGUAGE } from '@config/config';
import { Link as RRLink, useLocation } from '@reach/router';
import clsx from 'clsx';
import React, { memo, useMemo } from 'react';
import { useIntl } from 'react-intl';

export type IProps = Parameters<typeof RRLink>[0] & {
  activeClassName?: string;
  rel?: string;
};

const Link: React.FC<IProps> = memo(({ to: href, activeClassName, className, rel, ...props }: IProps) => {
  const { locale } = useIntl();
  const { pathname } = useLocation();

  const to = useMemo(() => {
    if (href?.slice(0, 1) === '.') {
      return locale === BASE_LANGUAGE ? href.slice(1) : `/${locale}${href.slice(1)}`;
    } else {
      return href || '';
    }
  }, [href, locale]);

  const linkClassName = useMemo(() => {
    const isActive = pathname === to.substring(0, to.length - 1) || pathname === to;

    return isActive ? clsx(className, activeClassName) : className;
  }, [activeClassName, className, pathname, to]);

  return href?.slice(0, 4) === 'http' ? (
    <a href={href} className={linkClassName} {...props} rel={rel} />
  ) : (
    <RRLink {...props} to={to} className={linkClassName} />
  );
});

export default Link;
