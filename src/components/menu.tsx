import React, { useState } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import Navigation from './navigation'
import Social from './social'
import data from '../lib/data.json'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">{data.siteInfo.SiteName}</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Navigation className="mx-auto" />
                <Social className="" />
            </Collapse>
        </Navbar>
    );
}
