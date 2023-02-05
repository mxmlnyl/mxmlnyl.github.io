import '../styles/globals.css';
import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';
import {MDXProvider} from '@mdx-js/react';
import HomeLayout from '@components/home/layout';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const Layout = Component.getLayout ?? 'default';
  const LayoutComponent =
    Layout === 'Home'
      ? HomeLayout
      : ({children}: {children: ReactElement}) => <div>{children}</div>;
  return (
    <MDXProvider>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </MDXProvider>
  );
}
