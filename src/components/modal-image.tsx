import Img from 'react-optimized-image'
import { images } from '../lib/images'
import { PortfolioImageProps } from '../types'

export default function postImage({ title, picture, slug, rounded, onClick }: PortfolioImageProps) {
    const className = rounded ? ' rounded' : '';
    const image = (
        <img
            src={images[picture]}
            alt={'Cover Image for' + title}
            className={'img-fluid' + className}
        />
    );
    return (
        <div>
            {slug ? (
                <a href="#" onClick={onClick} aria-label={title}>{image}</a>
            ) : (
                image
            )}
        </div>
    );
}
