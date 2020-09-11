import { useDispatch } from 'react-redux'
import { Badge } from 'reactstrap'
import { FaHashtag } from 'react-icons/fa'
import { applicationActionCreators } from '../store/actions/application'
import { TagProps } from '../types'

export default function Tag({ tag, page }: TagProps) {
    const dispatch = useDispatch();
    return (
        <Badge color='primary' className='tag' href='#' onClick={() => dispatch(applicationActionCreators.setTagFilter(page, tag))}>
            <FaHashtag /><span>{tag.value.toUpperCase()}</span>
        </Badge>
    );
}
