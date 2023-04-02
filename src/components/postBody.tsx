import React, { ReactElement } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PostBodyProps } from '../typescript';

export default function PostBody({ content }: PostBodyProps): ReactElement {
    return (
        <MDXRenderer>{content}</MDXRenderer>
    );
}
