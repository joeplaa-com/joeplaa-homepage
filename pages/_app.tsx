import * as React from 'react';
import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import '../styles/site.scss';

const App = ({ Component, pageProps }: AppProps) => {
    // Get the application-wide store instance, prepopulating with state from the server where available.
    const store = configureStore();

    return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
    );
};

export default App;
