import Head from 'next/head';
import { AppProps } from 'next/app';
import { WithMantine } from '../components/WithMantine';
import { OtterkitAppShell } from '../components/OtterkitAppShell';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  if (props.router.pathname.startsWith('/docs')) {
    return (
      <>
        <Head>
          <title>Otterkit — Docs</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <WithMantine>
          <OtterkitAppShell>
            <Component {...pageProps} />
          </OtterkitAppShell>
        </WithMantine>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Otterkit — Homepage</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <WithMantine>
        <Component {...pageProps} />
      </WithMantine>
    </>
  );
}
