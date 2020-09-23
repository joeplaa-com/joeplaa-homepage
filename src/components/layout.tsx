import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};