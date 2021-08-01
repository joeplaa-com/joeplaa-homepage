import { graphql, useStaticQuery } from 'gatsby';

interface IuseSitePricing {
    computeC1: string,
    computeC2: string,
    computeC3: string,
    computeH1: string,
    computeH2: string,
    computeStorage: string,
    webshopConfig: string,
    webshopHosting: string,
    websiteDesign: string,
    websiteHosting: string,
    websiteUpdates: string
}

export default function useSitePricing(): IuseSitePricing {
    const { site } = useStaticQuery(
        graphql`
            query SITE_PRICING_QUERY {
                site {
                    siteMetadata {
                        pricing {
                            computeC1
                            computeC2
                            computeC3
                            computeH1
                            computeH2
                            computeStorage
                            webshopConfig
                            webshopHosting
                            websiteDesign
                            websiteHosting
                            websiteUpdates
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.pricing;
}