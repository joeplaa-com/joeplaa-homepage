export interface IallPosts {
    title: string;
    date: string;
    slug: string;
    author: string;
    coverImage: string;
    excerpt: string;
}

export interface ILayoutProps {
    children: React.ReactNode;
    preview?: string;
    siteDescription: string;
    siteTitle: string;
}

export interface IMetaProps {
    siteTitle: string;
    siteDescription: string;
}