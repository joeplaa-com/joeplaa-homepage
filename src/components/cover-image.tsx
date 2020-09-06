import Link from "next/link";
import { ICoverImageProps } from '../interfaces'

export default function CoverImage({ title, src, slug }: ICoverImageProps) {
    const image = (
        <img
            src={src}
            alt={`Cover Image for ${title}`}
        />
    );
    return (
        <div className="-mx-5 sm:mx-0">
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
