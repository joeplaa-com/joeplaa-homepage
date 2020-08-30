import React from 'react';
import { AppProps } from 'next/app'
import { withTina } from 'tinacms';
import '../styles/site.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default withTina(MyApp)
