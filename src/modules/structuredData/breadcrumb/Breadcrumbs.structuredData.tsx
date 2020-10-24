import React, { memo } from 'react';
import { Head } from 'react-static';

const BreadcrumbsStructuredData: React.FC = memo(() => {
  const showBreadcrumbs = false;

  return showBreadcrumbs ? (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({}),
        }}
      />
    </Head>
  ) : null;
});

export default BreadcrumbsStructuredData;
