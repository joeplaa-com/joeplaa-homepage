import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React, { ReactElement } from 'react';
import CodeButton from './codeButton';

interface Props {
    codeString: string
    language: Language
}

const Code = ({ codeString, language }: Props): ReactElement => {
    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={theme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps, }): ReactElement => (
                <div style={{ position: 'relative' }}>
                    <pre className={className} style={{ ...style, position: 'relative' }}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                    <CodeButton codeString={codeString} />
                </div>
            )}
        </Highlight>
    );
};

export default Code;