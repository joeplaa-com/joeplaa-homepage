import React, { ReactElement } from 'react';
import { Col, Row } from 'reactstrap';
import PostPreview from './postPreview';
import { PostBasicProps } from '../typescript';

export default function PostStories({ posts }: { posts: PostBasicProps[] }): ReactElement {
    return (
        <section>
            <Row className='row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1'>
                {posts.map((post) => (
                    <Col key={post.fields.slug}>
                        <PostPreview
                            fields={post.fields}
                            frontmatter={post.frontmatter}
                            key={post.fields.slug}
                        />
                    </Col>
                ))}
            </Row>
        </section>
    );
}
