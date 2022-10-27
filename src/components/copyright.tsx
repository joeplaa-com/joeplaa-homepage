import React, { ReactElement } from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteSettings from '../hooks/useSiteSettings';
import useSiteUrls from '../hooks/useSiteUrls';
import linkColor from '../utils/linkColor';
import { FooterLinkProps } from '../typescript';
import NewTabLink from './newTabLink';

export default function Copyright({ color }: FooterLinkProps): ReactElement {
    const { businessName } = useSiteMetadata();
    const { designedBy, designerName, designerUrl } = useSiteSettings();
    const { jodibooks } = useSiteUrls();
    return (
        <div className='text-center'>
            <NewTabLink className={linkColor(color)} href={jodibooks}>{businessName}</NewTabLink>{' '}{new Date().getFullYear()}{'.'}
            {' '}{designedBy}{' '}<NewTabLink className={linkColor(color)} href={designerUrl}>{designerName}{'.'}</NewTabLink>
        </div>
    );
}
