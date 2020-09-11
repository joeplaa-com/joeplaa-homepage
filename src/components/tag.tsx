import { useDispatch } from 'react-redux'
import { Badge } from 'reactstrap'
import { FaHashtag } from 'react-icons/fa'
import { applicationActionCreators } from '../store/actions/application'
import { TagProps } from '../types'

export default function Tag({ name, page }: TagProps) {
    const dispatch = useDispatch();
    return (
        <Badge color='primary' className='tag' href='#' onClick={() => dispatch(applicationActionCreators.setTagFilter(page, name))}>
            <FaHashtag /><span>{name.toUpperCase()}</span>
        </Badge>
    );
}
