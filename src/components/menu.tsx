import React, { useState } from 'react'
import {
    Collapse, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown,
    Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink
} from 'reactstrap'
import { urls } from '../lib/constants'
import data from '../lib/data.json'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">{data.SiteName}</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar pills>
                    <NavItem>
                        <NavLink href={urls.internal.home}>{data.Home}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={urls.internal.blog}>{data.Blog}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={urls.internal.portfolio}>{data.Portfolio}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={urls.internal.howto}>{data.Howto}</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            {data.Recommended}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink href={urls.internal.books}>{data.Books}</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href={urls.internal.videos}>{data.Videos}</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
