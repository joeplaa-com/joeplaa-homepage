import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import Navigation from './navigation'
import BannerWwwCom from '../svg/banner-www-com.svg'
import { metaData, settings } from '../utils/data'

export default function Menu() {
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
                <div className="mr-2"><BannerWwwCom height="55px" /></div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Navigation className='ml-auto' />
            </Collapse>
        </Navbar>
    );
}