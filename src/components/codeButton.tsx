import React, { ReactElement, useState } from 'react';
import { MdCheck, MdContentCopy } from 'react-icons/md';
import { Button } from 'reactstrap';
import { content } from '../utils/content';
import { copyToClipboard } from '../utils/copy-to-clipboard';
import normalize from '../utils/normalize';

interface Props {
    codeString: string
}

const CodeButton = ({ codeString }: Props): ReactElement => {
    const [copied, setCopied] = useState(false);

    const [stripped] = normalize(codeString); // strip unwanted comments

    function delay(time: number): void {
        setTimeout(() => setCopied(false), time);
    }

    const icon = copied ? <MdCheck /> : <MdContentCopy />;
    const label = copied ? content.Copied : content.Copy;

    const handleClick = async (): Promise<void> => {
        setCopied(true);
        copyToClipboard(stripped);
        delay(3000);
    };

    return (
        <>
            <Button
                outline
                size='sm'
                color='light'
                className='code-copy-button'
                onClick={handleClick}
                aria-label={label}
            >
                {icon}
            </Button>
        </>
    );
};

export default CodeButton;