import sortArrayObject from './sortArrayObject';
import { LabelProps } from '../types';

export default function formatPostTags(tags: string[]): LabelProps[] {
    const postTags: LabelProps[] = [];
    tags.forEach(tag => {
        postTags.push({ value: tag, label: tag, count: 1 });
    });
    return sortArrayObject(postTags);
}
