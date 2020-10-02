import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { PostImageProps } from '../types'

export default function PostImage({ className, title, picture, slug, rounded, path, onClick }: PostImageProps) {
    const classRounded = rounded ? ' rounded' : '';
    const image = (
        <Img fluid={picture.fluid} alt={'Cover Image for ' + title} objectFit="cover" objectPosition="50% 50%" className={'img-fluid' + classRounded} />
    );
    return (
        <div className={className}>
            {slug
                ? path
                    ? (<Link to={slug}>
                        {image}
                    </Link>)
                    : (<button onClick={onClick} aria-label={title}>{image}</button>)
                : (image)
            }
        </div>
    );
}