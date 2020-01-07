import React, { memo } from 'react';
import { useIntl } from 'react-intl';

import imageJPG from 'assets/img/mateusz_lesiak.jpg';
import image2xJPG from 'assets/img/mateusz_lesiak@2x.jpg';
import imageWebP from 'assets/img/mateusz_lesiak.webp';
import image2xWebP from 'assets/img/mateusz_lesiak@2x.webp';

const IntroImage: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <picture>
      <source srcSet={`${image2xWebP} 2x, ${imageWebP} 1x`} type="image/webp" />
      <source srcSet={`${image2xJPG} 2x, ${imageJPG} 1x`} type="image/jpeg" />
      <img src={imageJPG} alt={formatMessage({ id: 'fullname' })} height="500" width="462" />
    </picture>
  );
};

export default memo(IntroImage);
