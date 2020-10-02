import React from 'react'
import { Link } from 'gatsby'
import { CardTitle } from 'reactstrap'
import { PostTitleProps } from '../types'

export default function PostTitle({ title, slug, path, onClick }: PostTitleProps) {
    return (
        <CardTitle>
            <h3>
                {path
                    ? (<Link to={slug}>
                        {title}
                    </Link>)
                    : (<button onClick={onClick}>{title}</button>)
                }
            </h3>
        </CardTitle>
    )
}