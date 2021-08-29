/* eslint-disable compat/compat */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
    metadata: {
        authorName: 'Joep van de Laarschot',
        authorFirstName: 'Joep',
        authorLastName: 'van de Laarschot',
        businessAddress1: 'Ir. Kalffstraat 43',
        businessAddress2: '5617BK Eindhoven',
        businessCountry: 'The Netherlands',
        businessCoC: 'Work in progress',
        businessIBAN: 'Work in progress',
        businessName: 'Joeplaa',
        businessVAT: 'Work in progress',
        componentAboutTitle: 'About',
        componentContactTitle: 'Contact',
        componentPricingDescription: 'If you want a website, here\'s what it costs.',
        componentPricingTitle: 'Pricing',
        componentServicesDescription: 'If you want a website, here\'s how I can help.',
        componentServicesTitle: 'Services',
        componentWikiFaq: 'Faq',
        componentWikiPricing: 'Pricing',
        componentWikiProcedure: 'Procedure',
        componentWikiTitle: 'Wiki',
        pageHomeDescription: 'Who is Joep and what is Joeplaa?',
        pageHomeImage: '/images/banner-www-com.png',
        pageHomeSubtitle: 'Website design | Website hosting',
        pageHomeTitle: 'Home',
        pageHowtoTitle: 'How-to',
        pageLandingDescription: 'Welcome on joeplaa.com. Click on the links to explore further.',
        pageLandingTitle: 'Landing',
        pagePortfolioDescription: 'Examples of my work and skills in front-end development. If you like my work, let me know!',
        pagePortfolioTitle: 'Portfolio',
        pageRecommendedDescription: 'I\'ve read a lot of books and watched countless videos on the web. Here you can find a list of my recommended books and videos.',
        pageRecommendedTitle: 'Recommended',
        pageServicesDescription: 'How I work and what tools I use.',
        pageServicesImage: '/images/banner-www-com.png',
        pageServicesTitle: 'Services',
        siteDescription: 'Helping people create their digital home.',
        siteImage: '/images/banner-www-default-fb.png',
        siteLanguage: 'en-US',
        siteLocale: 'en_us',
        siteName: 'joeplaa.com',
        siteUrl: process.env.GATSBY_URL,
        siteTitle: 'joeplaa.com',
        titleSeparator: '|',
        titleTemplate: 'joeplaa.com',
        twitterUsername: '',
    },
    navigation: {
        about: '/#About',
        blog: process.env.GATSBY_BLOG_URL,
        contact: '/#Contact',
        home: '/#Banner',
        howto: '/howto',
        portfolio: '/portfolio',
        pricing: '/#Pricing',
        ps: '/conditions/privacy-statement',
        recommended: process.env.GATSBY_BLOG_URL + '/recommended',
        services: '/services',
        tagsNav: '/tags',
        tos: '/conditions/terms-of-service'
    },
    pricing: {
        webshopConfig: '€ 750',
        webshopHosting: '€ 7.50',
        websiteDesign: '€ 750',
        websiteHosting: '€ 7.50',
        websiteUpdates: '€ 17.50',
        computeC1: '€ 0.75',
        computeC2: '€ 1.25',
        computeC3: '€ 1.50',
        computeH1: '€ 25.00',
        computeH2: '€ 20.00',
        computeStorage: '€ 0.01'
    },
    settings: {
        breakpoint: 'md',
        designedBy: 'Website design by',
        designerName: 'Joeplaa',
        designerUrl: 'https://github.com/joeplaa/joeplaa.com',
        iconSize: '40px',
        plausibleID: process.env.GATSBY_PLAUSIBLE_ID
    },
    siteUrl: process.env.GATSBY_URL, // needed for gatsby-plugin-advanced-sitemap
    urls: {
        site: {
            mailForm: process.env.GATSBY_MAIL_URL,
            plausible: 'https://plausible.joeplaa.com',
            siteUrl: process.env.GATSBY_URL,
        },
        contact: {
            email: 'info@joeplaa.com',
            messenger: 'https://m.me/joeplaacom/',
            whatsapp: 'https://api.whatsapp.com/send?phone=31610520633',
        },
        accounts: {
            facebook: 'https://www.facebook.com/joeplaadotcom',
            github: 'https://github.com/joeplaa',
            githubOrg: 'https://github.com/joeplaa-com',
            instagram: 'https://www.instagram.com/joeplaa/',
            linkedin: 'https://www.linkedin.com/in/joeplaa/',
        },
        aws: 'https://aws.amazon.com/',
        bamboo: 'https://www.atlassian.com/software/bamboo',
        gatsbyjs: 'https://www.gatsbyjs.com/',
        ghost: 'https://ghost.org/',
        jenkins: 'https://www.jenkins.io/',
        jodibooks: 'https://jodibooks.com/',
        magento: 'https://magento.com/',
        nextjs: 'https://nextjs.org/',
        opencart: 'https://www.opencart.com/',
        teamcity: 'https://www.jetbrains.com/teamcity/',
        woocommerce: 'https://woocommerce.com/',
        wordpress: 'https://wordpress.org/'
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        'gatsby-plugin-advanced-sitemap',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-image',
        'gatsby-plugin-preact',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-webpack-bundle-analyser-v2',
        'gatsby-remark-reading-time',
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
                test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
                exclude: /(node_modules|.cache|public)/,
                options: {
                    emitWarning: true,
                    failOnError: false
                }
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
                    purpose: 'any maskable',
                }
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            offsetY: '100',
                            maintainCase: false,
                            removeAccents: true,
                            elements: ['h1', 'h2', 'h3'],
                        }
                    },
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
                            showCaptions: ['title'],
                        },
                    }
                ],
                remarkPlugins: [
                    require('remark-math'),
                    require('remark-html-katex'),
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-page-progress',
            options: {
                includePaths: [],
                excludePaths: [{ regex: '^/howto' }, { regex: '^/portfolio' }, { regex: '^/wiki' }],
                height: 3,
                prependToBody: false,
                color: '#07b1c2',
                footerHeight: 244,
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
                defaultQuality: 70,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            maintainCase: false,
                            removeAccents: true,
                            elements: ['h1', 'h2', 'h3'],
                        }
                    }
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/authors`,
                name: 'authors',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/conditions`,
                name: 'conditions',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/howto`,
                name: 'howto',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/portfolio`,
                name: 'portfolio',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/wiki`,
                name: 'wiki',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/images`,
                name: 'images',
            },
        },
    ],
};
