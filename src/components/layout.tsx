import React from 'react'
import Footer from './footer'
import Header from './header'
import { LayoutProps } from '../types'

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex-wrapper">
            <div>
                <Header />
                <div>
                    <main>{children}</main>
                </div>
            </div>
            <Footer backgroundColor='background5' />
        </div>
    );
};