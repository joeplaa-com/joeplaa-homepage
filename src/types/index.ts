export type BannerProps = {
    title: string
    subtitle: string
    src: string
    alt: string
}

export type CopyrightLinkProps = {
    className?: string
    color: 'dark' | 'light' | 'navbar'
}

export type SocialLinkProps = {
    className?: string
    color: 'dark' | 'light' | 'navbar'
    size: string
}