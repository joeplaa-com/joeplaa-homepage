import { useSelector } from 'react-redux'
import { CardColumns } from 'reactstrap'
import ModalPreview from './modal-preview';
import filterTag from '../lib/filterTag'
import { PostTypeProps } from '../types'

export default function ModalStories({ posts, page }: { posts: Array<PostTypeProps>, page: string }) {
    const filter = useSelector((state) => state.filter);
    return (
        <section>
            <CardColumns>
                {posts.filter( (post) => (filterTag(post, filter.userFilter[page])) ).map((post) => (
                    <ModalPreview
                        key={post.slug}
                        title={post.title}
                        postImage={post.postImage}
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
