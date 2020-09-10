import { Button } from 'reactstrap'
import { FaHashtag } from 'react-icons/fa'
import { TagProps } from '../types'

export default function Tag({ name }: TagProps) {
    return (
        <Button size="sm">
            <FaHashtag /><span>{name}</span>
        </Button>
    );
}
