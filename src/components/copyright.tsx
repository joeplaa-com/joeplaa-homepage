import React from 'react';
import { Link } from './customLink';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteSettings from '../hooks/useSiteSettings';
import useSiteUrls from '../hooks/useSiteUrls';
import linkColor from '../utils/linkColor';
import { FooterLinkProps } from '../types';

export default function Copyright({ color }: FooterLinkProps) {
    const { businessName } = useSiteMetadata();
    const { designedBy, designerName, designerUrl } = useSiteSettings();
    const { site } = useSiteUrls();
    return (
        <div className='text-center'>
            <Link className={linkColor(color)} to={site.siteUrl}>{businessName}</Link>{' '}{new Date().getFullYear()}{'.'}
            {' '}{designedBy}{' '}<Link className={linkColor(color)} to={designerUrl}>{designerName}{'.'}</Link>
        </div>
    );
}