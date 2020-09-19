import { useSelector } from 'react-redux'
import { CardColumns } from 'reactstrap'
import PortfolioPreview from './portfolio-preview';
import filterTag from '../lib/filterTag'
import { PostTypeProps } from '../types'

export default function MoreStories({ posts, page, path }: { posts: Array<PostTypeProps>, page: string, path: string }) {
    const filter = useSelector((state) => state.filter);
    return (
        <section>
            <CardColumns>
                {posts.filter( (post) => (filterTag(post, filter.userFilter[page])) ).map((post) => (
                    <PortfolioPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        slug={post.slug}
                        excerpt={post.excerpt}
                        tags={post.tags}
                        page={page}
                        content={post.content}
                    />
                ))}
            </CardColumns>
        </section>
    );
}
