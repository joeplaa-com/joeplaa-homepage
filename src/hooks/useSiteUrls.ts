import { graphql, useStaticQuery } from 'gatsby';

interface IuseSiteUrls {
    site: {
        mailForm: string,
        plausible: string,
        siteUrl: string
    },
    contact: {
        email: string,
        messenger: string,
        whatsapp: string
    },
    accounts: {
        facebook: string,
        github: string,
        githubOrg: string,
        instagram: string,
        linkedin: string
    },
    aws: string,
    gatsbyjs: string,
    ghost: string,
    jodibooks: string,
    magento: string,
    nextjs: string,
    opencart: string,
    woocommerce: string,
    wordpress: string
}

export default function useSiteUrls(): IuseSiteUrls {
    const { site } = useStaticQuery(
        graphql`
            query SITE_URLS_QUERY {
                site {
                    siteMetadata {
                        urls {
                            site {
                                mailForm
                                plausible
                                siteUrl
                            }
                            contact {
                                email
                                messenger
                                whatsapp
                            }
                            accounts {
                                facebook
                                github
                                githubOrg
                                instagram
                                linkedin
                            }
                            aws
                            gatsbyjs
                            ghost
                            jodibooks
                            magento
                            nextjs
                            opencart
                            woocommerce
                            wordpress
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.urls;
}