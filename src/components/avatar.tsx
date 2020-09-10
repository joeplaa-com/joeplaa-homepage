import Img from 'react-optimized-image'
import { images } from '../lib/images'
import { AuthorProps } from '../types'

export default function Avatar({ name, picture }: AuthorProps) {
    return (
        <div>
            <img src={images[picture]} alt={name} />
            <div>{name}</div>
        </div>
    );
}
