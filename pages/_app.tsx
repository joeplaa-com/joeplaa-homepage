import React from 'react';
import { withTina } from 'tinacms';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default withTina(MyApp)
