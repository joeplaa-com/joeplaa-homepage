import React from 'react'
import { CardColumns } from 'reactstrap'
import PostPreview from './postPreview'
import { PostBasicProps } from '../types'

export default function PostStories({ posts }: { posts: Array<PostBasicProps> }) {
    return (
        <section>
            <CardColumns>
                {posts.map((post) => (
                    <PostPreview
                        excerpt={post.excerpt}
                        fields={post.fields}
                        fileAbsolutePath={post.fileAbsolutePath}
                        frontmatter={post.frontmatter}
                        key={post.fields.slug}
                    />
                ))}
            </CardColumns>
        </section>
    );
}