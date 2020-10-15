import formatPostTags from './formatPostTags'

export default function filterTag(post, tags) {
    const result = tags.map(tag => formatPostTags(post.frontmatter.tags).some(el => el.value === tag.value)).some(res => res === true);

    console.log('filterTag:', result);
    return result;
}