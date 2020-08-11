import * as React from 'react';
import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../src/store/configureStore';
import '../styles/site.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={configureStore().store}>
            <PersistGate persistor={configureStore().persistor} loading={null}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
};

export default MyApp;
