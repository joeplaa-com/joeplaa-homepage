import * as dotenv from 'dotenv';
import { GatsbyConfig } from 'gatsby';
import path from 'path';
// import { languages, defaultLanguage } from './languages';

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules'
);

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const siteMetadata = {
    metadata: {
        authorName: 'Joep van de Laarschot',
        authorFirstName: 'Joep',
        authorLastName: 'van de Laarschot',
        businessAddress1: 'De Wolwever 27',
        businessAddress2: '5737AD Lieshout',
        businessCountry: 'The Netherlands',
        businessCoC: '70590680',
        businessIBAN: 'NL33 BUNQ 2205841939',
        businessName: 'jodiBooks B.V.',
        businessVAT: '858385818B01',
        componentAboutTitle: 'About',
        componentContactTitle: 'Contact',
        componentServicesDescription: 'If you want a website, here\'s how I can help.',
        componentServicesTitle: 'Services',
        componentShopDescription: 'I (re)sell new and secondhand hardware.',
        componentShopTitle: 'Shop',
        pageHomeDescription: 'Who is Joep and what is Joeplaa?',
        pageHomeImage: '/images/banner-www-com.png',
        pageHomeSubtitle: 'Website design | Website hosting',
        pageHomeTitle: 'Home',
        pageLandingDescription: 'Welcome on joeplaa.com. Click on the links to explore further.',
        pageLandingTitle: 'Landing',
        pagePortfolioDescription: 'Examples of my work and skills in front-end development. If you like my work, let me know!',
        pagePortfolioImage: '/images/banner-www-portfolio.png',
        pagePortfolioTitle: 'Portfolio',
        pageRecommendedDescription: 'I\'ve read a lot of books and watched countless videos on the web. Here you can find a list of my recommended books and videos.',
        pageRecommendedTitle: 'Recommended',
        pageServicesDescription: 'How I work and what tools I use.',
        pageServicesImage: '/images/banner-www-com.png',
        pageServicesTitle: 'Services',
        pageShopDescription: 'An example of our jodiBooks webshop. The items are actually for sale!',
        pageShopImage: '/images/banner-www-com.png',
        pageShopTitle: 'Shop',
        pageWikiDescription: 'Cheatsheets, tutorials and more on Linux, Databases, Proxmox, TrueNAS, Virtualization, Docker, LXC, ...',
        pageWikiTitle: 'Wiki',
        siteDescription: 'Helping people create their digital home.',
        siteImage: '/images/banner-www-default-fb.png',
        siteLanguage: 'en-US',
        siteLocale: 'en_us',
        siteName: 'joeplaa.com',
        siteUrl: process.env.GATSBY_URL,
        siteTitle: 'joeplaa.com',
        titleSeparator: '|',
        titleTemplate: 'joeplaa.com',
        twitterUsername: ''
    },
    navigation: {
        about: '/#About',
        blog: process.env.GATSBY_BLOG_URL,
        contact: '/#Contact',
        home: '/',
        portfolio: '/portfolio',
        recommended: process.env.GATSBY_BLOG_URL + '/recommended',
        services: '/services',
        shop: '/shop',
        tagsPortfolio: '/portfolio/tags',
        tos: 'https://jodibooks.com/Conditions/TOS/',
        wiki: 'https://wiki.joeplaa.com'
    },
    settings: {
        breakpoint: 'md',
        designedBy: 'Website design by',
        designerName: 'Joeplaa',
        designerUrl: 'https://github.com/joeplaa/joeplaa.com',
        iconSize: '40px',
        umamiID: '5fb00e3e-bcdc-493c-9b85-6566eed3b22e'
    },
    siteUrl: process.env.GATSBY_URL, // needed for gatsby-plugin-advanced-sitemap and gatsby-plugin-react-i18next
    urls: {
        site: {
            mailForm: process.env.GATSBY_MAIL_URL,
            umami: 'https://umami.joeplaa.com',
            siteUrl: process.env.GATSBY_URL
        },
        contact: {
            email: 'info@joeplaa.com',
            signal: '',
            telegram: 'https://t.me/@joeplaa',
            whatsapp: 'https://api.whatsapp.com/send?phone=31610520633'
        },
        accounts: {
            facebook: 'https://www.facebook.com/joeplaadotcom',
            github: 'https://github.com/joeplaa',
            githubOrg: 'https://github.com/joeplaa-com',
            instagram: 'https://www.instagram.com/joeplaa/',
            linkedin: 'https://www.linkedin.com/in/joeplaa/'
        },
        jodibooks: 'https://jodibooks.com/'
    }
};

const config: GatsbyConfig = {
    flags: {
        DEV_SSR: false,
        FAST_DEV: false,
        PARALLEL_SOURCING: true
    },
    siteMetadata,
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: path.join(__dirname, 'content/authors'),
                name: 'authors'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: path.join(__dirname, 'content/portfolio'),
                name: 'portfolio'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: path.join(__dirname, '/src/images'),
                name: 'images'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: path.join(__dirname, '/src/locales'),
                name: 'locale'
            }
        },
        'gatsby-plugin-advanced-sitemap',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-webpack-bundle-analyser-v2',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                offset: -64
            }
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                // Gatsby required rules directory
                rulePaths: [gatsbyRequiredRules],
                // Default settings that may be ommitted or customized
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: ['node_modules', 'bower_components', '.cache', 'public']
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'joeplaa.com',
                short_name: 'joeplaa.com',
                description: 'Helping people create their digital home.',
                start_url: '/',
                background_color: '#fff',
                theme_color: '#07b1c2',
                display: 'browser',
                icon: 'src/images/icon.png',
                icon_options: {
                    purpose: 'any maskable'
                }
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow noreferrer'
                        }
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            linkImagesToOriginal: true,
                            maxWidth: 960,
                            srcSetBreakpoints: [320, 640],
                            withWebp: true,
                            showCaptions: ['title']
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svg/
                }
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }]
                    },
                    production: {
                        policy: [{ userAgent: '*', allow: '/' }]
                    }
                }
            }
        },
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                stripMetadata: true,
                defaultQuality: 70
            }
        }
    ]
};

export default config;
