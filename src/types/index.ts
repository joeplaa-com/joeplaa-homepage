import { ReactNode } from "react"

export type AboutProps = {
    backgroundColor: string
}

export type BannerProps = {
    alt: string
    src: string
    subtitle: string
    title: string
}

export type CopyrightLinkProps = {
    className?: string
    color: 'dark' | 'light' | 'navbar'
}

export type LayoutProps = {
    children?: string | ReactNode
}

export type NewTabProps = {
    children?: string | ReactNode
    className?: string
    href: string
    text?: string
}

export type PricingProps = {
    backgroundColor: string
}

export type ServicesProps = {
    backgroundColor: string
}

export type SocialLinkProps = {
    className?: string
    color: 'dark' | 'light' | 'navbar'
    size: string
}