import { graphql, useStaticQuery } from 'gatsby';

interface IuseSiteNavigation {
    about: string,
    blog: string,
    contact: string,
    home: string,
    portfolio: string,
    pricing: string,
    ps: string,
    recommended: string,
    services: string,
    shop: string,
    tagsPortfolio: string,
    tos: string,
    wiki: string
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
                            portfolio
                            pricing
                            ps
                            recommended
                            services
                            shop
                            tagsPortfolio
                            tos
                            wiki
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.navigation;
}
