import { GTAToken } from '@config/config';
import React, { memo } from 'react';
import { Head } from 'react-static';

const src = `https://www.googletagmanager.com/gtag/js?id=${GTAToken}`;

const GoogleAnalytics: React.FC = memo(() => (
  <Head>
    <script async src={src} />
    <script>
      {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', '${GTAToken}');`}
    </script>
  </Head>
));

export default GoogleAnalytics;
