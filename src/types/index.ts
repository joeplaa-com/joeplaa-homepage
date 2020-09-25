import { ReactElement } from "react"

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

export type newTabProps = {
    children?: string | ReactElement
    className?: string
    href: string
    text?: string
}

export type PricingProps = {
    backgroundColor: string
}

export type SocialLinkProps = {
    className?: string
    color: 'dark' | 'light' | 'navbar'
    size: string
}