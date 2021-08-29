import React, { ReactElement } from 'react';
import { Card, CardBody, CardFooter, CardText } from 'reactstrap';
import Avatar from './avatar';
import PostImage from './postImage';
import PostSubtitle from './postSubtitle';
import PostTitle from './postTitle';
import truncateText from '../utils/truncateText';
import { PostBasicProps } from '../types';

export default function PostPreview({ fields, frontmatter }: PostBasicProps): ReactElement {
    return (
        <Card>
            <CardBody>
                <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                <PostImage path={true} slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} height={180} />
                <PostSubtitle className='mb-2' date={frontmatter.date} readingTime={fields.readingTime?.text} tags={frontmatter.tags} />
                <CardText>{truncateText(frontmatter.excerpt, 150)}</CardText>
            </CardBody>
            <CardFooter>
                <Avatar name={frontmatter.author} />
            </CardFooter>
        </Card>
    );
}