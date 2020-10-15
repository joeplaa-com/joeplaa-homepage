import React, { lazy, Suspense } from 'react'
import { Card, CardBody, CardText } from 'reactstrap'
const Avatar = lazy(() => import('./avatar'))
const PostImage = lazy(() => import('./postImage'))
const PostSubtitle = lazy(() => import('./postSubtitle'))
const PostTitle = lazy(() => import('./postTitle'))
import RenderLoader from './renderLoader'
import currentPage from '../utils/currentPage'
import { PostProps } from '../types'

export default function PostPreview({ excerpt, fields, fileAbsolutePath, frontmatter }: PostProps) {
    const isSSR = typeof window === "undefined";
    return (
        <Card>
            {!isSSR && (
                <Suspense fallback={<RenderLoader />}>
                    <CardBody>
                        <PostImage path={true} slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} height={180} />
                        <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                        <PostSubtitle className='mb-2' date={frontmatter.date} page={currentPage(fileAbsolutePath)} tags={frontmatter.tags} />
                        <CardText>{excerpt}</CardText>
                        <Avatar name={frontmatter.author} />
                    </CardBody>
                </Suspense>
            )}
        </Card>
    );
}