import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, ReactElement } from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import Navigation from './navigation';
import BannerWwwCom from '../svg/banner-www-com.svg';
import { NavbarProps } from '../typescript';
import { settings, urls } from '../data/metadata';

export default function Menu({ navbarLightText }: NavbarProps): ReactElement {

    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = (): void => setCollapsed(!collapsed);

    // *** Get scroll position and change navbar styling accordingly
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = (): void => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return (): void => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarTop = navbarLightText ? 'navbar-dark top light-text' : 'navbar-light top dark-text';
    const navbarActive = scrollPosition > 10 ? 'active shadow navbar-light' : collapsed ? 'active navbar-light' : navbarTop;
    const navbarToggle = scrollPosition > 10 ? 'navbar-light top dark-text' : collapsed ? 'navbar-light top dark-text' : navbarTop;
    // ***

    return (
        <Navbar className={navbarActive + ' ' + 'fixed-top'} expand={settings.breakpoint}>
            <div className={navbarTop + ' ' + 'd-flex align-items-center p-0 navbar-brand'}>
                <Link href={urls.internal.home}>
                    <Image src={BannerWwwCom} height={55} alt='banner' />
                </Link>
            </div>
            <NavbarToggler onClick={toggleNavbar} className={navbarToggle} />
            <Collapse isOpen={collapsed} navbar>
                <Navigation className='ms-auto' />
            </Collapse>
        </Navbar>
    );
}
