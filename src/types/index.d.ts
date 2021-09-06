import { ReactElement, ReactNode } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Language } from 'prism-react-renderer';

export interface AuthorProps {
    name: string
}

export interface AvatarImageProps {
    node: {
        relativePath: string
        extension: string
        publicURL: string
        childImageSharp: ChildImageSharp
    }
}

export interface BannerProps {
    alt: string
    src: string
    subtitle: string
    title: string
}

// === Begin Gatsby images ===
interface ChildImageSharp {
    publicURL: string
    gatsbyImageData: IGatsbyImageData
}

export interface ImageNodeProps {
    node: {
        extension?: 'jpg' | 'jpeg' | 'png' | 'webp' | 'svg'
        publicURL: string
        relativePath?: string
        childImageSharp: ChildImageSharp
    }
}
// === End Gatsby images ===

export interface CodeProps {
    codeString: string
    language: Language
}

export interface CustomNavLinkProps {
    children: ReactNode
    title?: string
    to: string
}

export interface FilterProps {
    buttonType?: 'back' | 'more'
    className?: string
    page: string
    quantity?: boolean
    tags: LabelProps[]
}

export interface FooterLinkProps {
    className?: string
    color: 'dark' | 'light' | 'navbar'
}

export interface ImageProps {
    alt: string
    className?: string
    to?: string
    src: string
}

export interface LabelProps {
    value: string
    label: string
    count: number
}

export interface LayoutProps {
    children: string | ReactNode
    location: PageLocation
}

export interface NavbarProps {
    navbarLightText?: boolean
}

export interface NavigationProps {
    className: string
}

export interface NewTabProps {
    children?: string | ReactNode
    className?: string
    href: string
    text?: string
}

export interface PageState {
    key?: string
    prevPathname?: string
}

interface PageLocation extends Location {
    state?: PageState
}

export interface PageTemplateProps {
    data: {
        mdx: {
            author: string
            body: string
            edges: { node: PostBasicProps }[]
            excerpt: string
            fields: {
                slug: string
                readingTime?: {
                    text: string
                }
            }
            frontmatter: FrontMatterProps
            totalCount: number
        }
    }
    location: PageLocation
    pageContext: {
        next: PostBasicProps,
        previous: PostBasicProps
        tag: string
    }
}

export interface PaginationProps {
    currentPage: number
    numPages: number
    path: string
}

// === Begin Posts ===
interface FrontMatterProps {
    author: string
    category?: string
    cover: {
        childImageSharp: ChildImageSharp
        publicURL: string
    }
    date: string
    excerpt: string
    series?: boolean
    tags: string[]
    title: string
}

export interface PortfolioEntryProps extends PostBasicProps {
    body: string
}

interface PostBasicProps {
    fields: {
        slug: string
        readingTime?: {
            text: string
        }
    }
    frontmatter: FrontMatterProps
    key?: string | number
}

export interface PostBodyProps {
    content: string
}

interface PostQueryNode extends PostBasicProps {
    body: string
    id: string
}

export interface PostQueryProps {
    data: {
        allMdx: {
            nodes: PostQueryNode[]
            group: PostTagProps[]
        },
        site: {
            siteMetadata: {
                title: string
            },
        }
    },
    location: PageLocation
    pageContext?: {
        currentPage?: number
        numPages?: number
        slug?: string
        tag?: string
        tagRaw?: PostTagProps
    }
}

export interface PostImageProps {
    height?: number
    onClick?: () => void
    path: boolean
    picture: ChildImageSharp
    rounded?: boolean
    slug?: string
    title: string
}

export interface PostSubtitleProps {
    className?: string
    date: string
    readingTime?: string
    tags: string[]
}

export interface PostTagProps {
    fieldValue: string
    totalCount: number
}

export interface PostTitleProps {
    onClick?: () => void
    path: boolean
    slug: string
    title: string
}
// === End Posts ===

export interface SectionProps {
    className: string
}

export interface SocialLinkProps {
    color: 'dark' | 'light' | 'navbar'
    key: string | number
    size: string
}

export interface TagProps {
    icon?: ReactElement
    quantity?: boolean
    tag: LabelProps
}