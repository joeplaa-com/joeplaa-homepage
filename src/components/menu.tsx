import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import ImageLogo from './imageLogo'
import Navigation from './navigation'
import { settings, siteInfo } from '../utils/data'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // *** Get window size and change navbar styling accordingly
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const navbarMobile = width < 768 ? 'navbar-light' : '';
    // ***

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

    const navbarActive = scrollPosition > 10 ? 'active shadow' : '';
    // ***

    return (
        <Navbar className={navbarMobile + ' ' + navbarActive + ' ' + 'fixed-top'} expand={settings.breakpoint}>
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