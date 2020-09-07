
import React from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Nav, NavItem, NavLink } from 'reactstrap'
import { useRouter } from 'next/router'
import data from '../lib/data.json'

export default function Navigation({ className }: {className: string}) {
    function activeLink(href) {
        const router = useRouter();
        const path = router.pathname;

        return (path === href)
    }

    return (
        <Nav className={className} navbar pills>
            <NavItem active={activeLink(data.menu.home)}>
                <NavLink href={data.menu.home}>{data.Home}</NavLink>
            </NavItem>
            <NavItem active={activeLink(data.menu.blog)}>
                <NavLink href={data.menu.blog}>{data.Blog}</NavLink>
            </NavItem>
            <NavItem active={activeLink(data.menu.portfolio)}>
                <NavLink href={data.menu.portfolio}>{data.Portfolio}</NavLink>
            </NavItem>
            <NavItem active={activeLink(data.menu.howto)}>
                <NavLink href={data.menu.howto}>{data.Howto}</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {data.Recommended}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink href={data.menu.books}>{data.Books}</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink href={data.menu.videos}>{data.Videos}</NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    );
}