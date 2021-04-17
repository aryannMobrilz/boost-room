import React, { FC } from 'react';
import Head from 'next/head';

import '@/styles/global.less';

function MyApp({
  Component,
  pageProps
}: {
  Component: FC;
  pageProps: Record<string, never>;
}): JSX.Element {
  return (
    <>
      <Head>
        <title>Nesto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
