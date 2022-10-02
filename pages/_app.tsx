import { AppProps } from 'next/app';
import WithMantine from '../components/WithMantine';
import OtterkitLayout from '../components/OtterkitLayout';
import Head from 'next/head';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  if (props.router.pathname.startsWith('/docs'))
    return (
      <>
        <Head>
          <title>Otterkit COBOL — Docs</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <WithMantine>
          <OtterkitLayout>
            <Component {...pageProps} />
          </OtterkitLayout>
        </WithMantine>
      </>
    );

  return (
    <>
      <Head>
        <title>Otterkit COBOL — Homepage</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <WithMantine>
        <Component {...pageProps} />
      </WithMantine>
    </>
  );
}
