import Link from "next/link"
import Img from 'react-optimized-image'
import { images } from '../lib/images'
import { CoverImageProps } from '../types'

export default function CoverImage({ title, src, slug }: CoverImageProps) {
    const image = (
        <Img
            src={images[src]}
            alt={`Cover Image for ${title}`}
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
