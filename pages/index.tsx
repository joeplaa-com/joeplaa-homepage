import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { browserName } from 'react-device-detect';
import Layout from '../src/components/Layout';
import BrowserCheck from '../src/components/BrowserCheck';
import registerServiceWorker from '../src/registerServiceWorker';
import { applicationActionCreators } from '../src/store/actions/application';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        registerServiceWorker(window.location);
        dispatch(applicationActionCreators.setBrowser(browserName));
    }, []);

    return (
        <Layout>
            <BrowserCheck />
        </Layout>
    );
};

export default Index;
