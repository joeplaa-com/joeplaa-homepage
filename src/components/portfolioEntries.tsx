import React, { ReactElement } from 'react';
import { Col, Row } from 'reactstrap';
import PortfolioPreview from './portfolioPreview';
import { PortfolioEntryProps } from '../typescript';

export default function PortfolioEntries({ posts }: { posts: Array<PortfolioEntryProps> }): ReactElement {
    return (
        <section>
            <Row className='row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1'>
                {posts.map((post) => (
                    <Col key={post.fields.slug}>
                        <PortfolioPreview
                            body={post.body}
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
