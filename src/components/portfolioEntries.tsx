import React from 'react'
import { CardColumns } from 'reactstrap'
import PortfolioPreview from './portfolioPreview'
import { PortfolioEntryProps } from '../types'

export default function PortfolioEntries({ posts }: { posts: Array<PortfolioEntryProps> }) {
    return (
        <section>
            <CardColumns>
                {posts.map((post) => (
                    <PortfolioPreview
                        body={post.body}
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