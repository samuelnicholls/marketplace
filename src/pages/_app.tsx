import React from 'react';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import { fetcher } from '@/utils';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default App;
