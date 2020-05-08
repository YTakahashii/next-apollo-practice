import { AppProps } from 'next/app';
import { Global } from '@emotion/core';
import { globalStyle } from '../styles/global';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/client';

type Props = AppProps;

const App: React.FC<Props> = ({ Component, pageProps }) => (
  <>
    <ApolloProvider client={client}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ApolloProvider>
  </>
);

export default App;
