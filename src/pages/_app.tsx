import '../styles/globals.css';
import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';
import {MDXProvider} from '@mdx-js/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? 'blogPost';

  console.log(getLayout);
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
