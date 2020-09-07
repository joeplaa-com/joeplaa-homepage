import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaGoodreads } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { urls } from '../lib/data'
import linkColor from '../lib/linkColor'
import { Ilink } from '../interfaces'

export default function Header({ classString, color }: Ilink) {
    return (
        <IconContext.Provider value={{ size: '1.25rem' }}>
            <Nav className={classString} nav>
                <NavItem>
                    <NavLink className={linkColor(color)} href={urls.facebook}><FaFacebook /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color)} href={urls.instagram}><FaInstagram /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color)} href={urls.linkedin}><FaLinkedin /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color)} href={urls.github}><FaGithub /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color)} href={urls.goodreads}><FaGoodreads /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color)} href={urls.mailto}><MdMail /></NavLink>
                </NavItem>
            </Nav>
        </IconContext.Provider>
    );
}
