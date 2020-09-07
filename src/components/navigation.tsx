
import React from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Nav, NavItem, NavLink } from 'reactstrap'
import { useRouter } from 'next/router'
import { data, navigation } from '../lib/data'

export default function Navigation({ className }: { className: string }) {
    function activeLink(href) {
        const router = useRouter();
        const path = router.pathname;

        return (path === href)
    }

    return (
        <Nav className={className} navbar pills>
            <NavItem active={activeLink(navigation.home)}>
                <NavLink href={navigation.home}>{data.Home}</NavLink>
            </NavItem>
            <NavItem active={activeLink(navigation.blog)}>
                <NavLink href={navigation.blog}>{data.Blog}</NavLink>
            </NavItem>
            <NavItem active={activeLink(navigation.portfolio)}>
                <NavLink href={navigation.portfolio}>{data.Portfolio}</NavLink>
            </NavItem>
            <NavItem active={activeLink(navigation.howto)}>
                <NavLink href={navigation.howto}>{data.Howto}</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {data.Recommended}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink href={navigation.books}>{data.Books}</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink href={navigation.videos}>{data.Videos}</NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    );
}