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
                            staticHosting
                            dynamicHosting
                            computeCPU
                            computeRAM
                            computeNetworkOut
                            computeStorage
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.pricing;
}