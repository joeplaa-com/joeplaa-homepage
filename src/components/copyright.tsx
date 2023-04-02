import React, { ReactElement } from 'react';
import linkColor from '../utils/linkColor';
import { FooterLinkProps } from '../typescript';
import NewTabLink from './newTabLink';
import { metadata, settings, urls } from '../data/metadata';

export default function Copyright({ color }: FooterLinkProps): ReactElement {
    return (
        <div className='text-center'>
            <NewTabLink className={linkColor(color)} href={urls.external.jodibooks}>{metadata.businessName}</NewTabLink>{' '}{new Date().getFullYear()}{'.'}
            {' '}{metadata.designedBy}{' '}<NewTabLink className={linkColor(color)} href={metadata.designerUrl}>{metadata.designerName}{'.'}</NewTabLink>
        </div>
    );
}
