import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import { PostHeaderProps } from '../types'

export default function PostHeader({ title, coverImage, date, author, slug, page }: PostHeaderProps) {
    return (
        <>
            <h1>{title}</h1>
            <div className='mb-2 mt-2 mb-sm-3 mt-sm-3 mb-sm-4 mt-sm-4'>
                <CoverImage title={title} picture={coverImage} slug={slug} rounded={true} page={page} />
            </div>
            <div className='mx-auto mb-2 mt-2 mb-sm-3 mt-sm-3 mb-sm-4 mt-sm-4'>
                <div className='mb-2'>
                    <Avatar name={author.name} picture={author.picture} />
                </div>
                <div>
                    <em><DateFormater dateString={date} /></em>
                </div>
            </div>
        </>
    );
}
