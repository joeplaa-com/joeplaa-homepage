import Link from 'next/link';
import React, { ReactElement } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { content } from '../data/content';
import { NavigationProps } from '../typescript';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { metadata, urls } from '../data/metadata';

export default function Navigation({ className }: NavigationProps): ReactElement {
    return (
        <Nav className={className} navbar>
            <NavItem>
                <Link href={urls.internal.home}>{metadata.pageHomeTitle}</Link>
            </NavItem>
            <NavItem>
                <Link href={urls.internal.about}>{metadata.componentAboutTitle}</Link>
            </NavItem>
            <NavItem>
                <Link href={urls.internal.services}>{metadata.pageServicesTitle}</Link>
            </NavItem>
            <NavItem>
                <Link href={urls.internal.portfolio}>{metadata.pagePortfolioTitle}</Link>
            </NavItem>
            <NavItem>
                <Link href={urls.internal.shop}>{metadata.pageShopTitle}</Link>
            </NavItem>
            <NavItem>
                <Link href={urls.internal.contact}>{metadata.componentContactTitle}</Link>
            </NavItem>
            <NavItem>
                <Link href={urls.external.wiki}>{metadata.pageWikiTitle} <FaExternalLinkAlt /></Link>
            </NavItem>
            <NavItem>
                <Link href={urls.external.blog}>{content.Blog} <FaExternalLinkAlt /></Link>
            </NavItem>
            <NavItem>
                <Link href={urls.external.jodibooks}>jodiBooks <FaExternalLinkAlt /></Link>
            </NavItem>
        </Nav>
    );
}
