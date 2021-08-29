import React, { ReactElement } from 'react';
import { CardDeck } from 'reactstrap';
import PortfolioPreview from './portfolioPreview';
import { PortfolioEntryProps } from '../types';

export default function PortfolioEntries({ posts }: { posts: Array<PortfolioEntryProps> }): ReactElement {
    return (
        <section>
            <CardDeck>
                {posts.map((post) => (
                    <PortfolioPreview
                        body={post.body}
                        fields={post.fields}
                        frontmatter={post.frontmatter}
                        key={post.fields.slug}
                    />
                ))}
            </CardDeck>
        </section>
    );
}