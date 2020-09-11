export default function filterTag(post, tags) {
    return post.tags.split(', ' || ',').some( tag => tags.indexOf(tag) !== -1 )
}