import React from 'react'
import { newTabProps } from '../types'

const NewTabLink = ({ children, className, href, text }: newTabProps) => {
    return <a href={href} target='_blank' rel='noopener noreferrer' className={className}>{children ? children : text}</a>
}

export default NewTabLink