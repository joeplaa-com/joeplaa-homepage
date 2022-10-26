import { MDXProvider } from '@mdx-js/react';
import React, { ReactElement } from 'react';
import Code from './src/components/code';
import NewTabLink from './src/components/newTabLink';
import './src/styles/site.scss';

const components = {
    // eslint-disable-next-line react/display-name
    'p.inlineCode': props => (
        <code className='inline-code' {...props} />
    ),
    pre: ({ children: { props } }): ReactElement | undefined => {
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

export const wrapRootElement = ({ element }): ReactElement => (
    <MDXProvider components={components}>
        {element}
    </MDXProvider>
);
