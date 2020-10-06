import { Link } from 'gatsby'
import React from 'react'
import { Button } from 'reactstrap'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { content } from '../utils/data'

const PostBrowseButton = ({ title, to, type }: { title: string, to: string, type: string }) => {

    return (
        <Link to={to}>
            <Button outline color='primary'>
                {type === 'previous' ? <><MdKeyboardArrowLeft />{content.PreviousPost}</> : content.NextPost}
                {title}
                {type === 'next' ? <MdKeyboardArrowRight /> : null}
            </Button>
        </Link>
    )
}

export default PostBrowseButton