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
        <title>Gamer Marketplace - Leveling, Boost, Gold, Items, Accounts &ndash; BoostRoom</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
