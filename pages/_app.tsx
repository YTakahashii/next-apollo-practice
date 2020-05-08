import { AppProps } from 'next/app';
import { Global } from '@emotion/core';
import { globalStyle } from '../styles/global';

type Props = AppProps;

const App: React.FC<Props> = ({ Component, pageProps }) => (
  <div>
    <Global styles={globalStyle} />
    <Component {...pageProps} />
  </div>
);

export default App;
