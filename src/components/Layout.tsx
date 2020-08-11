import * as React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';
import BrowserCheck from './BrowserCheck';
import Footer from './Footer';
import Menu from './Menu';
import en from '../data/en.json';

const Layout = (props: { children?: React.ReactNode, title?: string }) => (
    <div>
        <Head>
            <title>{props.title}</title>
        </Head>
        <header>
            <BrowserCheck />
            <Menu />
        </header>
        <main>
            <Container fluid className="text-center mt-15">
                {props.children}
            </Container>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default Layout;
