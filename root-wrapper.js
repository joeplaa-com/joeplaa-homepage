import { MDXProvider } from '@mdx-js/react';
import { Link } from "gatsby"
import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Code from './src/components/code'
import NewTabLink from './src/components/newTabLink'
import configureStore from './src/store/configureStore'

const components = {
    // eslint-disable-next-line react/display-name
    'p.inlineCode': props => (
        <code style={{ backgroundColor: 'lightgray' }} {...props} />
    ),
    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={
                        props.className && props.className.replace('language-', '')
                    }
                    {...props}
                />
            );
        }
    },
    Link,
    NewTabLink
};

export const wrapRootElement = ({ element }) => (
    <Provider store={configureStore().store}>
        <PersistGate persistor={configureStore().persistor} loading={null}>
            <MDXProvider components={components}>
                {element}
            </MDXProvider>
        </PersistGate>
    </Provider>
);