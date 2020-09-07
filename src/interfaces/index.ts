export interface IallPostsProps {
    title: string;
    date: string;
    slug: string;
    author: IAuthorProps;
    coverImage: string;
    excerpt?: string;
    key?: string;
    content?: string;
    ogImage?: string;
}

export interface IAuthorProps {
    name: string;
    picture: string;
}

export interface ICoverImageProps {
    title: string;
    src: string;
    slug: string;
}

export interface IDateFormatterProps {
    dateString: string;
}

export interface IHeroPostProps {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: IAuthorProps;
    slug: string;
}

export interface IInitialPostProps {
    slug: string;
}

export interface ILayoutProps {
    children: React.ReactNode;
    preview?: string;
    siteDescription?: string;
    siteTitle?: string;
}

export interface Ilink {
    classString?: string;
    color: 'dark' | 'light' | 'navbar';
}

export interface IMetaProps {
    siteTitle: string;
    siteDescription: string;
}

export interface IPostProps {
    post: IInitialPostProps;
    morePosts?: string;
    preview: string;
}

export interface IPostBodyProps {
    content: string;
}

export interface IPostHeaderProps {
    title: string;
    coverImage: string;
    date: string;
    author: IAuthorProps;
    slug: string;
}

export interface IPostTitleProps {
    children: React.ReactNode;
}
