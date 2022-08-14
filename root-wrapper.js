/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { MDXProvider } from 'gatsby-plugin-mdx';
import Code from './src/components/code';
import NewTabLink from './src/components/newTabLink';
import './src/styles/site.scss';

const components = {
    // eslint-disable-next-line react/display-name
    'p.inlineCode': props => (
        <code className='inline-code' {...props} />
    ),
    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={props.className && props.className.replace('language-', '')}
                    {...props}
                />
            );
        }
    },
    NewTabLink
};

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        {element}
    </MDXProvider>
);
