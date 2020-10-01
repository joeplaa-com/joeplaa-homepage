import { ReactNode } from 'react'
import { FixedObject, FluidObject } from 'gatsby-image'
import { Language } from 'prism-react-renderer'

export type BannerProps = {
    alt: string
    src: string
    subtitle: string
    title: string
}

// === Begin Gatsby images ===
type ChildImageSharp = {
    publicURL: string
}

interface ChildImageSharpFixed extends ChildImageSharp {
    fixed: FixedObject
}

interface ChildImageSharpFluid extends ChildImageSharp {
    fluid: FluidObject
}

type ImageNode = {
    extension?: 'jpg' | 'jpeg' | 'png' | 'webp' | 'svg'
    publicURL: string
    relativePath?: string
}

interface ImageFixedNode extends ImageNode {
    childImageSharp: ChildImageSharpFixed
}

export type ImageFixedNodeProps = {
    node: ImageFixedNode
}

interface ImageFluidNode extends ImageNode {
    childImageSharp: ChildImageSharpFluid
}

export type ImageFluidNodeProps = {
    node: ImageFluidNode
}
// === End Gatsby images ===

export type CodeProps = {
    codeString: string
    language: Language
}

export type CopyrightLinkProps = {
    className?: string
    color: 'dark' | 'light' | 'navbar'
}

export type CustomNavLinkProps = {
    children: ReactNode
    href?: string
    title?: string
    to: string
}

export type ImageProps = {
    alt: string
    className?: string
    to?: string
    src: string
}

export type LayoutProps = {
    children?: string | ReactNode
}

export type NavigationProps = {
    className: string
}

export type NewTabProps = {
    children?: string | ReactNode
    className?: string
    href: string
    text?: string
}

export type PageProps = {
    location: {
        pathname: string
    }
}

// === Begin Posts ===
type FrontMatterProps = {
    cover?: {
        childImageSharp: ChildImageSharpFluid
        publicURL: string
    }
    date: string
    excerpt: string
    tags: Array<string>
    title: string
}

type PostBasicProps = {
    fields: {
        slug: string
    }
    frontmatter: FrontMatterProps
}

export type PostQueryData = {
    data: {
        allMdx: {
            nodes: Array<PostQueryNode>
            group: Array<{
                fieldValue: string
                totalCount: number
            }>
        },
        site: {
            siteMetadata: { 
                title: string
            },
        }
    }
}

export interface PostQueryNode extends PostBasicProps {
    body: string
    excerpt: string
    id: string
}

export type PostTemplateProps = {
    data: {
        mdx: {
            body: string
            edges: Array<{ node: PostBasicProps }>
            excerpt: string
            fields: {
                slug: string
            }
            frontmatter: FrontMatterProps
            totalCount: number
        }
    }
    pageContext: {
        next: PostBasicProps,
        previous: PostBasicProps
        tag: string
    }
}
// === End Posts ===

export type SectionProps = {
    className: string
}

export type SocialLinkProps = {
    color: 'dark' | 'light' | 'navbar'
    size: string
}