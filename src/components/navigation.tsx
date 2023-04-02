import Link from 'next/link';
import React, { ReactElement } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavigationProps } from '../typescript';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { metadata, urls } from '../data/metadata';

export default function Navigation({ className }: NavigationProps): ReactElement {
    return (
        <Nav className={className} navbar>
            <NavItem>
                <NavLink tag={Link} href={urls.internal.home}>{metadata.pageHomeTitle}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} href={urls.internal.tree}>{metadata.pageFamilyTreeTitle}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} href={urls.internal.shop}>{metadata.pageShopTitle}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} href={urls.internal.contact}>{metadata.componentContactTitle}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} href={urls.external.wiki}>{metadata.pageWikiTitle} <FaExternalLinkAlt /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} href={urls.external.blog}>{metadata.pageBlogTitle} <FaExternalLinkAlt /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} href={urls.external.jodibooks}>jodiBooks <FaExternalLinkAlt /></NavLink>
            </NavItem>
        </Nav>
    );
}
