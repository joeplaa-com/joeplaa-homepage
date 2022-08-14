import React, { ReactElement } from 'react';
import { IconContext } from 'react-icons';
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import { MdMail } from 'react-icons/md';
import NewTabLink from './newTabLink';
import useSiteUrls from '../hooks/useSiteUrls';
import linkColor from '../utils/linkColor';
import { SocialLinkProps } from '../typescript';

export default function Header({ color, key, size }: SocialLinkProps): ReactElement {
    const { accounts, contact } = useSiteUrls();
    const { githubOrg, instagram, linkedin } = accounts;
    return (
        <div className='d-flex justify-content-center'>
            <IconContext.Provider value={{ size, style: { margin: '.5rem' } }}>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={linkedin} key={linkedin + ' ' + key} ><SiLinkedin /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={githubOrg} key={githubOrg + ' ' + key}><SiGithub /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={'mailto:' + contact.email} key={contact.email + ' ' + key}><MdMail /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={instagram} key={instagram + ' ' + key}><SiInstagram /></NewTabLink>
            </IconContext.Provider>
        </div>
    );
}
