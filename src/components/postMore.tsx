import React, { ReactElement } from 'react';
import { CardDeck } from 'reactstrap';
import PostPreview from './postPreview';
import { PostBasicProps } from '../types';

export default function PostStories({ posts }: { posts: PostBasicProps[] }): ReactElement {
    return (
        <section>
            <CardDeck>
                {posts.map((post) => (
                    <PostPreview
                        fields={post.fields}
                        frontmatter={post.frontmatter}
                        key={post.fields.slug}
                    />
                ))}
            </CardDeck>
        </section>
    );
}
