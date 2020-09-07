import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaGoodreads } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import data from '../lib/data.json'

export default function Header({ className }: {className: string}) {
    return (
        <Nav className={className} navbar>
            <NavItem>
                <NavLink href={data.urls.facebook}><FaFacebook /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={data.urls.instagram}><FaInstagram /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={data.urls.linkedin}><FaLinkedin /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={data.urls.github}><FaGithub /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={data.urls.goodreads}><FaGoodreads /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={data.urls.mailto}><MdMail /></NavLink>
            </NavItem>
        </Nav>
    );
}
