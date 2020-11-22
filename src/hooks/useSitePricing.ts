import { graphql, useStaticQuery } from 'gatsby';

export default function useSitePricing () {
    const { site } = useStaticQuery(
        graphql`
            query SITE_PRICING_QUERY {
                site {
                    siteMetadata {
                        pricing {
                            staticDesign
                            dynamicDesign
                            cmsDesign
                            customDesign
                            staticHosting
                            dynamicHosting
                            cmsHosting
                            cmsPlusHosting
                            domainHosting
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.pricing;
}