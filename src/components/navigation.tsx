import React, { ReactElement } from 'react';
import { Nav, NavItem } from 'reactstrap';
import CustomNavLink from './customNavLink';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import { content } from '../utils/content';
import { NavigationProps } from '../typescript';

export default function Navigation({ className }: NavigationProps): ReactElement {
    const { componentAboutTitle, componentContactTitle, pageHomeTitle, pagePortfolioTitle, pageServicesTitle, pageShopTitle, pageWikiTitle } = useSiteMetadata();
    const { about, blog, contact, home, portfolio, services, shop, wiki } = useSiteNavigation();
    return (
        <Nav className={className} navbar>
            <NavItem>
                <CustomNavLink to={home}>{pageHomeTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={about}>{componentAboutTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={services}>{pageServicesTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={portfolio}>{pagePortfolioTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={shop}>{pageShopTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={contact}>{componentContactTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={wiki}>{pageWikiTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={blog}>{content.Blog}</CustomNavLink>
            </NavItem>
        </Nav>
    );
}
