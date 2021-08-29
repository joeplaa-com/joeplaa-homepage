import React, { ReactElement } from 'react';
import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import NewTabLink from './newTabLink';
import useSiteUrls from '../hooks/useSiteUrls';
import linkColor from '../utils/linkColor';
import { SocialLinkProps } from '../types';

export default function Header({ color, key, size }: SocialLinkProps): ReactElement {
    const { accounts, contact } = useSiteUrls();
    const { facebook, githubOrg, instagram, linkedin } = accounts;
    return (
        <div className='d-flex justify-content-center'>
            <IconContext.Provider value={{ size: size, style: { margin: '.5rem' } }}>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={linkedin} key={linkedin + ' ' + key} ><FaLinkedin /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={githubOrg} key={githubOrg + ' ' + key}><FaGithub /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={'mailto:' + contact.email} key={contact.email + ' ' + key}><MdMail /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={facebook} key={facebook + ' ' + key}><FaFacebook /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={instagram} key={instagram + ' ' + key}><FaInstagram /></NewTabLink>
            </IconContext.Provider>
        </div>
    );
}
