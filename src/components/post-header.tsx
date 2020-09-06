import Avatar from "./avatar";
import DateFormater from "./date-formater";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { IPostHeaderProps } from '../interfaces'

export default function PostHeader({ title, coverImage, date, author, slug }: IPostHeaderProps) {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="hidden md:block md:mb-12">
                <Avatar name={author.name} picture={author.picture} />
            </div>
            <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
                <CoverImage title={title} src={coverImage} slug={slug} />
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    <Avatar name={author.name} picture={author.picture} />
                </div>
                <div className="mb-6 text-lg">
                    <DateFormater dateString={date} />
                </div>
            </div>
        </>
    );
}
