import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { IconContext } from 'react-icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { urls } from '../utils/data'
import linkColor from '../utils/linkColor'
import { SocialLinkProps } from '../types'

export default function Header({ className, color, size }: SocialLinkProps) {
    return (
        <IconContext.Provider value={{ size: size }}>
            <Nav className={className} nav='true'>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.facebook} target='_blank' rel='noopener noreferrer'><FaFacebook /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.instagram} target='_blank' rel='noopener noreferrer'><FaInstagram /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.linkedin} target='_blank' rel='noopener noreferrer'><FaLinkedin /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.github} target='_blank' rel='noopener noreferrer'><FaGithub /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={'mailto:' + urls.email} target='_blank' rel='noopener noreferrer'><MdMail /></NavLink>
                </NavItem>
            </Nav>
        </IconContext.Provider>
    );
}
