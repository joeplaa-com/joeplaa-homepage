import React from 'react'
import { IconContext } from 'react-icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import NewTabLink from './newTabLink'
import useSiteUrls from '../hooks/useSiteUrls'
import linkColor from '../utils/linkColor'
import { SocialLinkProps } from '../types'

export default function Header ({ color, key, size }: SocialLinkProps) {
    const { email, facebook, github, instagram, linkedin } = useSiteUrls();
    return (
        <div className='d-flex justify-content-center'>
            <IconContext.Provider value={{ size: size, style: { margin: '.5rem' } }}>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={linkedin} key={linkedin + ' ' + key} ><FaLinkedin /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={github} key={github + ' ' + key}><FaGithub /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={'mailto:' + email} key={email + ' ' + key}><MdMail /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={facebook} key={facebook + ' ' + key}><FaFacebook /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={instagram} key={instagram + ' ' + key}><FaInstagram /></NewTabLink>
            </IconContext.Provider>
        </div>
    );
}
