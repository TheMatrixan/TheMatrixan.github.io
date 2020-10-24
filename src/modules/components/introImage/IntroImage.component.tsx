import React, { memo } from 'react';
import { useIntl } from 'react-intl';

import styles from './IntroImage.module.scss';

const createSource = (ext = 'jpg', type: '1x' | '2x' = '2x'): string => `/assets/images/mateusz_lesiak@${type}.${ext}`;

const IntroImage: React.FC = memo(() => {
  const { formatMessage } = useIntl();

  return (
    <picture>
      <source srcSet={`${createSource('avif', '2x')} 2x, ${createSource('avif', '1x')} 1x`} type="image/avif" />
      <source srcSet={`${createSource('webp', '2x')} 2x, ${createSource('webp', '1x')} 1x`} type="image/webp" />
      <source srcSet={`${createSource('jpeg', '2x')} 2x, ${createSource('jpeg', '1x')} 1x`} type="image/jpeg" />
      <img
        className={styles.image}
        src="/assets/images/mateusz_lesiak@1x.jpg"
        alt={formatMessage({ id: 'fullname' })}
        height="500"
        width="462"
      />
    </picture>
  );
});

export default IntroImage;
