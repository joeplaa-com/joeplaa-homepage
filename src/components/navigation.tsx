import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import NavLink from './customNavLink'
import { data, navigation } from '../utils/data'

export default function Navigation({ className }: { className: string }) {

    return (
        <Nav className={className} navbar>
            <NavItem>
                <NavLink to={navigation.home}>{data.Home}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={navigation.pricing}>{data.Pricing}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={navigation.portfolio}>{data.Portfolio}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={navigation.howto}>{data.Howto}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.blog}>{data.Blog}</NavLink>
            </NavItem>
        </Nav>
    );
}