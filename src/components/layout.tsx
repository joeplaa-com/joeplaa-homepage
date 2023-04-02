import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { ReactElement } from 'react';
import Footer from './footer';
import Header from './header';
import { LayoutProps } from '../typescript';
import { settings, urls } from '../data/metadata';

// Sticky footer: https://css-tricks.com/couple-takes-sticky-footer/
export default function Layout({ children }: LayoutProps): ReactElement {
    const router = useRouter();

    return (
        <div className='page-wrapper'>
            <Head>
                <noscript>
                    {`<div style={{ height: '100vw', width: '100%' }}>
                        <div style={{ padding: '20px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                            <h1>Oops!!!!</h1>
                            <p>This website only works with JavaScript enabled.</p>
                            <p>This website explains <a href="https://www.enable-javascript.com/nl/">how to enable JavaScript in your browser.</a></p>
                        </div>
                    </div>`}
                </noscript>
                <meta httpEquiv="X-Clacks-Overhead" content="GNU Terry Pratchett" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color={settings.themeColor} />
                <meta name="msapplication-TileColor" content={settings.themeColor} />
                <meta name="theme-color" content={settings.themeColor} />
            </Head>
            <Script
                async
                defer
                src={`${urls.external.umami}/umami.js`}
                data-website-id={settings.umamiID}
                data-domains='joeplaa.com,www.joeplaa.com'
            />

            <Header navbarLightText={router.pathname === '/'} />
            <main className='content'>{children}</main>
            <Footer className='footer-background' />
        </div>
    );
}
