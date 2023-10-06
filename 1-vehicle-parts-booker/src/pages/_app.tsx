import React from 'react';
import '@/styles/globals.scss';
import '@group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css';
import type { AppProps } from 'next/app';
import { applyPolyfills, defineCustomElements } from '@group-ui/group-ui/dist/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
