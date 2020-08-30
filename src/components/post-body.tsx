import markdownStyles from "./markdown-styles.module.css";
import { IPostBodyProps } from '../interfaces'

export default function PostBody({ content }: IPostBodyProps) {
    return (
        <div className="max-w-2xl mx-auto">
            <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
