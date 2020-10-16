import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import CustomNavLink from './customNavLink'
import { content, metaData, navigation } from '../utils/data'
import { NavigationProps } from '../types'

export default function Navigation({ className }: NavigationProps) {

    return (
        <Nav className={className} navbar>
            <NavItem>
                <CustomNavLink to={navigation.home}>{metaData.HomeTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.about}>{metaData.AboutTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.pricing}>{metaData.PricingTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.contact}>{metaData.ContactTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.wiki}>{metaData.WikiTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.portfolio}>{metaData.PortfolioTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.howto}>{metaData.HowtoTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion*/}
                <CustomNavLink to={navigation.blog!}>{content.Blog}</CustomNavLink>
            </NavItem>
        </Nav>
    );
}