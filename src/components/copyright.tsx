import React from 'react'
import { template } from '../utils/constants'
import { data, siteInfo, urls } from '../utils/data'
import linkColor from '../utils/linkColor'
import { CopyrightLinkProps } from '../types'

export default function Copyright({ color }: CopyrightLinkProps) {
    return (
        <div className='text-center'>
            {'© '}<a className={linkColor(color)} href={urls.website}>{siteInfo.BusinessName}</a>{' '}{new Date().getFullYear()}{'. '}{data.AllRightsReserved}
            {' '}{template.copy}{' '}<a className={linkColor(color)} href={template.url}>{template.name}{'.'}</a>
        </div>
    );
}