import { CardColumns } from 'reactstrap'
import PostPreview from "./post-preview";
import { PostTypeProps } from '../types'

export default function MoreStories({ posts }: { posts: Array<PostTypeProps> }) {
    return (
        <section>
            <CardColumns>
                {posts.map((post) => (
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
