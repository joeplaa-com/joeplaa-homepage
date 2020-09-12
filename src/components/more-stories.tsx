import { useSelector } from 'react-redux'
import { CardColumns } from 'reactstrap'
import PostPreview from "./post-preview";
import filterTag from '../lib/filterTag'
import { PostTypeProps } from '../types'

export default function MoreStories({ posts }: { posts: Array<PostTypeProps> }) {
    const filter = useSelector((state) => state.filter);
    return (
        <section>
            <CardColumns>
                {posts.filter( (post) => (filterTag(post, filter.userFilter.blog)) ).map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                        tags={post.tags}
                    />
                ))}
            </CardColumns>
        </section>
    );
}
