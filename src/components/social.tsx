import React, { ReactElement } from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { MdMail } from 'react-icons/md';
import NewTabLink from './newTabLink';
import linkColor from '../utils/linkColor';
import { SocialLinkProps } from '../typescript';
import { urls } from '../data/metadata';

export default function Header({ color, context, size }: SocialLinkProps): ReactElement {
    return (
        <div className='d-flex justify-content-center'>
            <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.accounts.linkedin} key={urls.accounts.linkedin + ' ' + context}><SiLinkedin size={size} /></NewTabLink>
            <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.accounts.github} key={urls.accounts.github + ' ' + context}><SiGithub size={size} /></NewTabLink>
            <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={'mailto:' + urls.contact.email} key={urls.contact.email + ' ' + context}><MdMail size={size} /></NewTabLink>
        </div>
    );
}
