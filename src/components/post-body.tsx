import { PostBodyProps } from '../types'

export default function PostBody({ content }: PostBodyProps) {
    return (
        <div className='max-w-2xl mx-auto'>
            <div className='markdown' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
