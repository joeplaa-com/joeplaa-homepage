import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import Footer from './footer';
import Header from './header';
import { LayoutProps } from '../typescript';
import { settings, urls } from '../data/metadata';
import Script from 'next/script';

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
