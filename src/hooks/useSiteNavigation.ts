import { graphql, useStaticQuery } from 'gatsby';

interface IuseSiteNavigation {
    about: string,
    blog: string,
    contact: string,
    home: string,
    howto: string,
    portfolio: string,
    pricing: string,
    ps: string,
    recommended: string,
    services: string,
    tagsNav: string,
    tos: string
}

export default function useSiteNavigation(): IuseSiteNavigation {
    const { site } = useStaticQuery(
        graphql`
            query SITE_NAVIGATION_QUERY {
                site {
                    siteMetadata {
                        navigation {
                            about
                            blog
                            contact
                            home
                            howto
                            portfolio
                            pricing
                            ps
                            recommended
                            services
                            tagsNav
                            tos
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.navigation;
}