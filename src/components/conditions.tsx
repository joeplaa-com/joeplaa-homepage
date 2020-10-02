import React from 'react'
import { Link } from 'gatsby'
import { metaData, navigation } from '../utils/data'
import linkColor from '../utils/linkColor'
import { FooterLinkProps } from '../types'

export default function Copyright({ color }: FooterLinkProps) {
    return (
        <div className='text-center'>
            <Link className={linkColor(color)} to={navigation.tos}>{metaData.TermsTitle}</Link>{' | '}
            <Link className={linkColor(color)} to={navigation.ps}>{metaData.PrivacyTitle}</Link>
        </div>
    );
}