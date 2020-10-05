import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import { Button } from 'reactstrap'
import { CodeProps } from '../types'
import { copyToClipboard } from '../utils/copy-to-clipboard'

const Code = ({ codeString, language }: CodeProps) => {

    const handleClick = () => {
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
            }) => (<pre className={className + ' d-flex justify-content-between align-items-center'} style={style}>
                <span>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </span>
                <Button outline size='sm' color='primary' onClick={handleClick}>Copy</Button>
            </pre>)}
        </Highlight>
    );
};

export default Code;