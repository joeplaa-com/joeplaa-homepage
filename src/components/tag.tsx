import React, { ReactElement } from 'react';
import { Link } from './customLink';
import { Badge } from 'reactstrap';
import { IconContext } from 'react-icons';
import kebabCase from 'lodash/kebabCase';
import TagIcon from './tagIcon';
import { TagProps } from '../typescript';

const Tag = ({ quantity, tag, template }: TagProps): ReactElement => {
    return (
        <Link to={`/${template}/tags/${kebabCase(tag.value)}`} className='tag badge badge-primary'>
            <IconContext.Provider value={{ size: '1.5rem', className: 'me-1' }}>{TagIcon(tag.value)}</IconContext.Provider>
            <span>{tag.value.toUpperCase()}</span>
            {quantity ? <Badge color="dark" className='tag-count' pill>{tag.count}</Badge> : null}
        </Link>
    );
};

export default Tag;
