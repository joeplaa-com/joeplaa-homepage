import React from 'react'
import { Link } from './customLink'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { template } from '../utils/constants'
import linkColor from '../utils/linkColor'
import { FooterLinkProps } from '../types'

export default function Copyright({ color }: FooterLinkProps) {
    const { businessName } = useSiteMetadata();
    return (
        <div className='text-center'>
            <Link className={linkColor(color)} to={process.env.GATSBY_URL}>{businessName}</Link>{' '}{new Date().getFullYear()}{'.'}
            {' '}{template.copy}{' '}<Link className={linkColor(color)} to={template.url}>{template.name}{'.'}</Link>
        </div>
    );
}