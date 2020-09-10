import Link from 'next/link'
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap'
import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import { HeroPostProps } from '../types'

export default function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: HeroPostProps) {
    return (
        <section>
            <Card className='mt-4'>
                <CardBody>
                    <CardTitle>
                        <h3>
                            <Link as={`/posts${slug}`} href='/posts/[slug]'>
                                <a>{title}</a>
                            </Link>
                        </h3>
                    </CardTitle>
                    <CardSubtitle>
                        <DateFormater dateString={date} />
                    </CardSubtitle>
                </CardBody>
                <CoverImage title={title} picture={coverImage} slug={slug} />
                <CardBody>
                    <Avatar name={author.name} picture={author.picture} />
                    <CardText>{excerpt}</CardText>
                </CardBody>
            </Card>
        </section>
    );
}
