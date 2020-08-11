import * as React from 'react';
import Head from 'next/head';
import BrowserCheck from './BrowserCheck';
import Footer from './Footer';
import Menu from './Menu';

const Layout = ({ children, title }: { children?: React.ReactNode, title?: string }) => (
    <div className="full-window">
        <Head>
            <title>{title}</title>
        </Head>

        <header>
            <BrowserCheck />
        </header>

        <Menu />

        <main className="main">
            {children}
        </main>

        <footer className="footer">
            <Footer />
        </footer>
    </div>
);

export default Layout;
