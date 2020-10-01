import React from 'react'
import { CardColumns } from 'reactstrap'
import PortfolioPreview from './portfolioPreview'
import { PostBasicProps } from '../types'

export default function PortfolioEntries({ posts }: { posts: Array<PostBasicProps> }) {
    return (
        <section>
            <CardColumns>
                {posts.map((post) => (
                    <PortfolioPreview
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