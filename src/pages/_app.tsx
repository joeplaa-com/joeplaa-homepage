import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import Layout from '../components/layout';
import { metadata } from '../data/metadata';
import '../styles/site.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>{metadata.siteTitle}</title>
            </Head>
            <DefaultSeo
                title={metadata.siteTitle}
                titleTemplate={`%s ${metadata.titleSeparator} ${metadata.siteTitle}`}
                defaultTitle={metadata.siteTitle}
                description={metadata.siteDescription}
                openGraph={{
                    type: 'website',
                    locale: metadata.siteLocale,
                    url: process.env.NEXT_PUBLIC_URL,
                    siteName: metadata.siteName
                }}
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default App;
