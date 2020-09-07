import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaGoodreads } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import {urls} from '../lib/data'

export default function Header({ className }: {className: string}) {
    return (
        <Nav className={className} navbar>
            <NavItem>
                <NavLink href={urls.facebook}><FaFacebook /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.instagram}><FaInstagram /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.linkedin}><FaLinkedin /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.github}><FaGithub /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.goodreads}><FaGoodreads /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={urls.mailto}><MdMail /></NavLink>
            </NavItem>
        </Nav>
    );
}
