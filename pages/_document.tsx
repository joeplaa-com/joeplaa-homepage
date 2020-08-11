import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    constructor (props: any) {
        super(props);
    };

    render () {
        /* Make sure to use data-aphrodite attribute in the style tag here
         so that aphrodite knows which style tag it's in control of when
         the client goes to render styles. If you don't you'll get a second
         <style> tag */
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />

                    {/* favicon related */}
                    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="36x36" href="/icons/android-icon-36x36.png" />
                    <link rel="icon" type="image/png" sizes="48x48" href="/icons/android-icon-48x48.png" />
                    <link rel="icon" type="image/png" sizes="72x72" href="/icons/android-icon-72x72.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/icons/android-icon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="144x144" href="/icons/android-icon-144x144.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
                    <link rel="manifest" href="/icons/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />

                    {/* Information for the Facebook Scraper: */}
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="jodiBooks Beauty" />
                    <meta property="og:title" content="Het salonpakket dat bijna net zo leuk is als je werk." />
                    <meta property="og:description" content="jodiBooks Beauty, bijna net zo leuk als je werk." />
                    <meta property="og:url" content="https://www.jodibooks.com" />
                    <meta property="og:image" content="/icons/og_logo.png" />
                    <meta property="og:image:secure_url" content="/icons/og_logo.png" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="300" />
                    <meta property="og:image:height" content="300" />
                </Head>
                <body>
                    <noscript>
                        <div style={{ height: '100vw', width: '100%' }}>
                            <div style={{ padding: '20px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                                <h1>Oeps!!!!</h1>
                                <p>De agenda werkt alleen met JavaScript, maar zo te zien heb je JavaScript gedeactiveerd in je browser.</p>
                                <p>Kijk hier hoe je JavaScript weer activeert: <a href="https://www.enable-javascript.com/nl/">Hoe activeer ik JavaScript in mijn web browser?</a></p>
                            </div>
                        </div>
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    };
};
