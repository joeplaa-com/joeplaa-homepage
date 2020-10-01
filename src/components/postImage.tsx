import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { PostImageProps } from '../types'

export default function PostImage({ className, title, picture, slug, rounded, path, onClick }: PostImageProps) {
    const classRounded = rounded ? ' rounded' : '';
    const image = (
        <Img fluid={picture.fluid} alt={'Cover Image for ' + title} className={'img-fluid' + classRounded} />
    );
    return (
        <div className={className}>
            {slug
                ? path
                    ? (<Link to={slug}>
                        {image}
                    </Link>)
                    : (<a href="#" onClick={onClick} aria-label={title}>{image}</a>)
                : (image)
            }
        </div>
    );
}