import Link from "next/link"
import Img from 'react-optimized-image'
import { images } from '../lib/images'
import { CoverImageProps } from '../types'

export default function CoverImage({ title, picture, slug }: CoverImageProps) {
    const image = (
        <img
            src={images[picture]}
            alt={`Cover Image for ${title}`}
            className='img-fluid'
        />
    );
    return (
        <div>
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
