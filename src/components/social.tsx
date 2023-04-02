import React, { ReactElement } from 'react';
import { IconContext } from 'react-icons';
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import { MdMail } from 'react-icons/md';
import NewTabLink from './newTabLink';
import linkColor from '../utils/linkColor';
import { SocialLinkProps } from '../typescript';
import { urls } from '../data/metadata';

export default function Header({ color, key, size }: SocialLinkProps): ReactElement {
    return (
        <div className='d-flex justify-content-center'>
            <IconContext.Provider value={{ size, style: { margin: '.5rem' } }}>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.accounts.linkedin} key={urls.accounts.linkedin + ' ' + key} ><SiLinkedin /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.accounts.githubOrg} key={urls.accounts.githubOrg + ' ' + key}><SiGithub /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={'mailto:' + urls.contact.email} key={urls.contact.email + ' ' + key}><MdMail /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.accounts.instagram} key={urls.accounts.instagram + ' ' + key}><SiInstagram /></NewTabLink>
            </IconContext.Provider>
        </div>
    );
}
