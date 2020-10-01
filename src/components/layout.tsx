import React from 'react'
import Footer from './footer'
import Header from './header'
import { LayoutProps } from '../types'

// Sticky footer: https://css-tricks.com/couple-takes-sticky-footer/
export default function Layout({ children }: LayoutProps) {
    return (
        <div className='page-wrapper'>
            <Header />
            <main className='content'>{children}</main>
            <Footer className='background5' />
        </div>
    );
}