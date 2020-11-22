import React from 'react'
import { Link } from './customLink'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useSiteSettings from '../hooks/useSiteSettings'
import linkColor from '../utils/linkColor'
import { FooterLinkProps } from '../types'

export default function Copyright({ color }: FooterLinkProps) {
    const { businessName } = useSiteMetadata();
    const { designedBy, designerName, designerUrl } = useSiteSettings();
    return (
        <div className='text-center'>
            <Link className={linkColor(color)} to={process.env.GATSBY_URL}>{businessName}</Link>{' '}{new Date().getFullYear()}{'.'}
            {' '}{designedBy}{' '}<Link className={linkColor(color)} to={designerUrl}>{designerName}{'.'}</Link>
        </div>
    );
}