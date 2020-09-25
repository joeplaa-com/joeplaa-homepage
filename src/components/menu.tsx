import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import ImageLogo from './imageLogo'
import Navigation from './navigation'
import { settings, siteInfo } from '../utils/data'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // *** Get scroll position and change navbar styling accordingly
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarActive = scrollPosition > 10 ? 'active shadow navbar-light' : isOpen ? 'active navbar-light' : 'navbar-dark';
    // ***

    return (
        <Navbar className={navbarActive + ' ' + 'fixed-top'} expand={settings.breakpoint}>
            <NavbarBrand href='/' className='d-flex align-items-center p-0'>
                <ImageLogo alt={siteInfo.SiteName} src='banner-www-com.png' className="mr-2" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Navigation className='ml-auto' />
            </Collapse>
        </Navbar>
    );
}