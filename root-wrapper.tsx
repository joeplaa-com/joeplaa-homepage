import { MDXProvider } from '@mdx-js/react';
import React, { ReactElement } from 'react';
import NewTabLink from './src/components/newTabLink';
import './src/styles/site.scss';

const components = {
    NewTabLink
};

export const wrapRootElement = ({ element }): ReactElement => (
    <MDXProvider components={components}>
        {element}
    </MDXProvider>
);
