import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap'
import Avatar from './avatar';
import DateFormater from './date-formater';
import CoverImage from './cover-image';
import Link from 'next/link';
import { PostTypeProps } from '../types'

export default function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: PostTypeProps) {
    return (
        <Card>
            <CardBody>
                <div className='mb-2'>
                    <CoverImage slug={slug} title={title} picture={coverImage} rounded={true} />
                </div>
            
                <CardTitle>
                    <h3>
                        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
                            <a>{title}</a>
                        </Link>
                    </h3>
                </CardTitle>

                <CardSubtitle className='mb-2'>
                    <em><DateFormater dateString={date} /></em>
                </CardSubtitle>

                <CardText>{excerpt}</CardText>

                <Avatar name={author.name} picture={author.picture} />
            </CardBody>
        </Card>
    );
}
