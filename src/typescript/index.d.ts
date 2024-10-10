import { ReactNode } from 'react';

export interface FooterLinkProps {
    className?: string
    color: 'dark' | 'light' | 'navbar'
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

export interface SectionProps {
    className: string
}

export interface SocialLinkProps {
    color: 'dark' | 'light' | 'navbar'
    context: string | number
    size: string
}
