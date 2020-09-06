import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaGoodreads } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { urls } from '../lib/constants'

export default function Header({ className }: {className: string}) {
    return (
        <Nav className={className} navbar>
            <NavItem>
                <NavLink href={urls.external.facebook}><FaFacebook /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.external.instagram}><FaInstagram /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.external.linkedin}><FaLinkedin /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.external.github}><FaGithub /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.external.goodreads}><FaGoodreads /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.external.mailto}><MdMail /></NavLink>
            </NavItem>
        </Nav>
    );
}
