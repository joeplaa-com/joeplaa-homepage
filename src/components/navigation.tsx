import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import CustomNavLink from './customNavLink'
import { content, navigation } from '../utils/data'
import { NavigationProps } from '../types'

export default function Navigation({ className }: NavigationProps) {

    return (
        <Nav className={className} navbar>
            <NavItem>
                <CustomNavLink to={navigation.home}>{content.Home}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.about}>{content.About}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.services}>{content.Services}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.pricing}>{content.Pricing}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.contact}>{content.Contact}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.portfolio}>{content.Portfolio}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.howto}>{content.Howto}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to='empty' href={navigation.blog}>{content.Blog}</CustomNavLink>
            </NavItem>
        </Nav>
    );
}