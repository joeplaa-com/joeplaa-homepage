import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import CustomNavLink from './customNavLink'
import { data, navigation } from '../utils/data'

export default function Navigation({ className }: { className: string }) {

    return (
        <Nav className={className} navbar>
            <NavItem>
                <CustomNavLink to={navigation.home}>{data.Home}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.about}>{data.About}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.pricing}>{data.Pricing}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.contact}>{data.Contact}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.portfolio}>{data.Portfolio}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.howto}>{data.Howto}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink href={navigation.blog}>{data.Blog}</CustomNavLink>
            </NavItem>
        </Nav>
    );
}