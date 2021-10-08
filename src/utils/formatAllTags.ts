import { LabelProps, PostTagProps } from '../types';
import sortArrayObject from './sortArrayObject';

export default function formatAllTags(tags: PostTagProps[]): LabelProps[] {
    const postTags: LabelProps[] = [];
    tags.forEach(tag => {
        postTags.push({ value: tag.fieldValue, label: tag.fieldValue, count: tag.totalCount });
    });
    return sortArrayObject(postTags);
}
