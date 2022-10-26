import React, { ReactElement } from 'react';
import { Spinner } from 'reactstrap';
import { content } from '../data/content';

const RenderLoader = (): ReactElement => (
    <div className='loader'>
        <Spinner color="primary" /><span className='ms-1'>{content.Loading}</span>
    </div>
);
export default RenderLoader;
