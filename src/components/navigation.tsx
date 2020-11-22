import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import CustomNavLink from './customNavLink'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { content, navigation } from '../utils/data'
import { NavigationProps } from '../types'

export default function Navigation({ className }: NavigationProps) {
    const { componentAboutTitle, componentContactTitle, componentPricingTitle, pageHomeTitle, pageHowtoTitle, pagePortfolioTitle, pageWikiTitle } = useSiteMetadata();
    return (
        <Nav className={className} navbar>
            <NavItem>
                <CustomNavLink to={navigation.home}>{pageHomeTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.about}>{componentAboutTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.pricing}>{componentPricingTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.contact}>{componentContactTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.wiki}>{pageWikiTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.portfolio}>{pagePortfolioTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.howto}>{pageHowtoTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion*/}
                <CustomNavLink to={navigation.blog!}>{content.Blog}</CustomNavLink>
            </NavItem>
        </Nav>
    );
}