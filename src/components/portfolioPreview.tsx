import React from 'react'
import { Card, CardBody } from 'reactstrap'
import PostImage from './postImage'
import PostSubtitle from './postSubtitle'
import PostTitle from './postTitle'
import currentPage from '../utils/currentPage'
import { PostBasicProps } from '../types'

export default function PortfolioPreview({ fields, fileAbsolutePath, frontmatter }: PostBasicProps) {
    return (
        <Card>
            <CardBody>
                <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                <PostImage className='mb-2' slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} />
                <PostSubtitle className='mb-2' date={frontmatter.date} page={currentPage(fileAbsolutePath)} tags={frontmatter.tags} />
            </CardBody>
        </Card>
    );
}