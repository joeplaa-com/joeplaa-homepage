import React, { ReactElement } from 'react';
import { NewTabProps } from '../typescript';
import Link from 'next/link';

const NewTabLink = ({ children, className, href, text }: NewTabProps): ReactElement => {
    return <Link href={href} target='_blank' rel='noopener noreferrer' className={className}>{children || text}</Link>;
};

export default NewTabLink;
