/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// https://stackoverflow.com/questions/61967988/how-to-create-page-with-parameters-in-gatsbyjs-dynamically
import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { wrapRootElement as wrap } from './root-wrapper';
import Layout from './src/components/layout';

export const wrapRootElement = wrap;

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, ...restProps }) => {
    return (
        <Layout
            props={restProps}
        >
            {element}
        </Layout>
    );
};
