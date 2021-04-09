import React, { FC } from 'react';
import Head from 'next/head';

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
        <meta name="viewport" content="viewport-fit=cover" />
        <title>Gamer Marketplace - Leveling, Boost, Gold, Items, Accounts &ndash; BoostRoom</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
