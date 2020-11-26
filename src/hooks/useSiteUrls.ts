import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteUrls () {
    const { site } = useStaticQuery(
        graphql`
            query SITE_URLS_QUERY {
                site {
                    siteMetadata {
                        urls {
                            mailForm
                            plausible
                            siteUrl
                            email
                            messenger
                            whatsapp
                            facebook
                            github
                            instagram
                            linkedin
                            awsCloudfront
                            awsLightsail
                            gatsbyjs
                            ghost
                            netlifycms
                            nextjs
                            strapi
                            wordpress
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.urls;
}