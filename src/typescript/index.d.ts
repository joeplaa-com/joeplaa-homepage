import { ReactElement, ReactNode } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { StaticImageData } from 'next/image';

export interface AuthorProps {
    name: string
}

export interface BannerProps {
    alt: string
    src: StaticImageData
    subtitle: string
    title: string
    height?: number
    width?: number
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
    template?: TemplateType
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

export interface PortfolioEntryProps extends PostBasicProps {
    body: string
}

export interface PostBodyProps {
    content: string
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
