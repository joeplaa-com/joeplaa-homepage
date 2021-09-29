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

    const label = copied ? <><MdCheck />{' '}{content.Copied}</> : <><MdContentCopy />{' '}{content.Copy}</>;

    const handleClick = async (): Promise<void> => {
        setCopied(true);
        copyToClipboard(stripped);
        delay(3000);
    };

    return (
        <Button
            outline
            size='sm'
            color='primary'
            style={{ position: 'absolute', top: '8px', right: '8px' }}
            onClick={handleClick}
        >
            {label}
        </Button>
    );
};

export default CodeButton;