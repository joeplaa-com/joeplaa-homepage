import * as React from 'react';
import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import configureStore from '../src/store/configureStore';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/site.scss';

const App = ({ Component, pageProps }: AppProps) => {
    // Get the application-wide store instance, prepopulating with state from the server where available.
    const store = configureStore();

    return (
        <CookiesProvider>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </CookiesProvider>
    );
};

export default App;
