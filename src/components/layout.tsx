import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
    return (
        <div className="flex-wrapper">
            <div>
                <Header />
                <div>
                    <main>{children}</main>
                </div>
            </div>
            <Footer />
        </div>
    );
};