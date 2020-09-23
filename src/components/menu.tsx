import React, { useState } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import Image from './image'
import Navigation from './navigation'
import Social from './social'
import { settings, siteInfo } from '../utils/data'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color='navbar-gray' light className='shadow' expand={settings.breakpoint}>
            <NavbarBrand href='/'>
                <Image alt={siteInfo.SiteName} src='banner-www-com.png' width='195px' height='65px' />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Navigation className='mx-auto' />
                <Social classString='justify-content-center' color='navbar' />
            </Collapse>
        </Navbar>
    );
}