import { GTA_TOKEN } from 'config';
import React, { memo, VoidFunctionComponent } from 'react';
import { Head } from 'react-static';

const src = `https://www.googletagmanager.com/gtag/js?id=${GTA_TOKEN}`;

const GoogleAnalytics: VoidFunctionComponent = memo(() => (
  <Head>
    <script async={true} src={src} />
    <script>
      {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', '${GTA_TOKEN}');`}
    </script>
  </Head>
));

export default GoogleAnalytics;
