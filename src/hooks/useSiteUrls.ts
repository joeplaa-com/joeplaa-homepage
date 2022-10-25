import { graphql, useStaticQuery } from 'gatsby';

interface IuseSiteUrls {
    site: {
        mailForm: string,
        umami: string,
        siteUrl: string
    },
    contact: {
        email: string,
        signal: string,
        telegram: string,
        whatsapp: string
    },
    accounts: {
        facebook: string,
        github: string,
        githubOrg: string,
        instagram: string,
        linkedin: string
    },
    jodibooks: string
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
                                umami
                                siteUrl
                            }
                            contact {
                                email
                                signal
                                telegram
                                whatsapp
                            }
                            accounts {
                                facebook
                                github
                                githubOrg
                                instagram
                                linkedin
                            }
                            jodibooks
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.urls;
}
