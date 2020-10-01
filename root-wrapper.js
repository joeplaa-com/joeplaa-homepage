import { MDXProvider } from '@mdx-js/react';
import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Code from './src/components/code'
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
    }
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