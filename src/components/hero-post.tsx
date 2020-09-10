import Link from 'next/link'
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap'
import Avatar from './avatar'
import CoverImage from './cover-image'
import DateFormater from './date-formater'
import Tag from './tag'
import { PostTypeProps } from '../types'

export default function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    tags
}: PostTypeProps) {
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
                        <em><DateFormater dateString={date} /></em>
                        {tags.split(', ').map((tag) => (
                            <Tag key={tag} name={tag} />
                        ))}
                    </CardSubtitle>
                </CardBody>

                <CoverImage title={title} picture={coverImage} slug={slug} />

                <CardBody>
                    <CardText>{excerpt}</CardText>

                    <Avatar name={author.name} picture={author.picture} />
                </CardBody>
            </Card>
        </section>
    );
}
