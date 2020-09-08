import markdownStyles from './markdown-styles.module.css';
import { PostBodyProps } from '../types'

export default function PostBody({ content }: PostBodyProps) {
    return (
        <div className='max-w-2xl mx-auto'>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
