import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React, { ReactElement } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { Button } from 'reactstrap';
import { CodeProps } from '../types';
import { content } from '../utils/content';
import { copyToClipboard } from '../utils/copy-to-clipboard';

const Code = ({ codeString, language }: CodeProps): ReactElement => {

    const handleClick = (): void => {
        copyToClipboard(codeString);
    };

    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={theme}>
            {({
                className,
                style,
                tokens,
                getLineProps,
                getTokenProps,
            }): ReactElement => (<div style={{ position: 'relative' }}>
                <pre className={className} style={{ ...style, position: 'relative' }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
                <Button outline size='sm' color='primary' style={{ position: 'absolute', top: '8px', right: '8px' }} onClick={handleClick}><MdContentCopy />{content.Copy}</Button>
            </div>)}
        </Highlight>
    );
};

export default Code;