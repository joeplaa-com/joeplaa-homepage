import React from 'react'
import { Link } from 'gatsby'
import { content, navigation } from '../utils/data'
import linkColor from '../utils/linkColor'
import { FooterLinkProps } from '../types'

export default function Copyright({ color }: FooterLinkProps) {
    return (
        <>
            <Link className={linkColor(color)} to={navigation.tos}>{content.TermsOfService}</Link>{' | '}
            <Link className={linkColor(color)} to={navigation.ps}>{content.PrivacyStatement}</Link>
        </>
    );
}