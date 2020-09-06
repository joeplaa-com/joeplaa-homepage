
import React from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Nav, NavItem, NavLink } from 'reactstrap'
import { useRouter } from 'next/router'
import { urls } from '../lib/constants'
import data from '../lib/data.json'

export default function Navigation({ className }: {className: string}) {
    function activeLink(href) {
        const router = useRouter();
        const path = router.pathname;

        return (path === href)
    }

    return (
        <Nav className={className} navbar pills>
            <NavItem active={activeLink(urls.internal.home)}>
                <NavLink href={urls.internal.home}>{data.Home}</NavLink>
            </NavItem>
            <NavItem active={activeLink(urls.internal.blog)}>
                <NavLink href={urls.internal.blog}>{data.Blog}</NavLink>
            </NavItem>
            <NavItem active={activeLink(urls.internal.portfolio)}>
                <NavLink href={urls.internal.portfolio}>{data.Portfolio}</NavLink>
            </NavItem>
            <NavItem active={activeLink(urls.internal.howto)}>
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
    );
}