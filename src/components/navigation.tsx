
import React from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Nav, NavItem, NavLink } from 'reactstrap'
import { useRouter } from 'next/router'
import { data, navigation } from '../lib/data'

export default function Navigation({ className }: { className: string }) {
    const router = useRouter();

    function activeLink(href) {
        const path = router.pathname;

        return (path === href)
    }

    function handleClick(href) {
        router.push(href)
    }

    return (
        <Nav className={className} navbar pills>
            <NavItem>
                <NavLink href={navigation.home} active={activeLink(navigation.home)}>{data.Home}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.blog} active={activeLink(navigation.blog)}>{data.Blog}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.portfolio} active={activeLink(navigation.portfolio)}>{data.Portfolio}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.howto} active={activeLink(navigation.howto)}>{data.Howto}</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar>
                <DropdownToggle nav caret>
                    {data.Recommended}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem active={activeLink(navigation.books)} onClick={() => handleClick(navigation.books)}>
                        {data.Books}
                    </DropdownItem>
                    <DropdownItem active={activeLink(navigation.videos)} onClick={() => handleClick(navigation.videos)}>
                        {data.Videos}
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    );
}