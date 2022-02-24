import { graphql, useStaticQuery } from 'gatsby';

interface IuseSiteMetadata {
    authorName: string,
    authorFirstName: string,
    authorLastName: string,
    businessAddress1: string,
    businessAddress2: string,
    businessCountry: string,
    businessCoC: string,
    businessIBAN: string,
    businessName: string,
    businessVAT: string,
    componentAboutTitle: string,
    componentContactTitle: string,
    componentPricingDescription: string,
    componentPricingTitle: string,
    componentServicesDescription: string,
    componentServicesTitle: string,
    componentWikiFaq: string,
    componentWikiPricing: string,
    componentWikiProcedure: string,
    pageHomeDescription: string,
    pageHomeImage: string,
    pageHomeSubtitle: string,
    pageHomeTitle: string,
    pageLandingDescription: string,
    pageLandingTitle: string,
    pagePortfolioDescription: string,
    pagePortfolioImage: string,
    pagePortfolioTitle: string,
    pageRecommendedDescription: string,
    pageRecommendedTitle: string,
    pageServicesDescription: string,
    pageServicesImage: string,
    pageServicesTitle: string,
    pageWikiDescription: string,
    pageWikiImage: string,
    pageWikiTitle: string,
    siteDescription: string,
    siteImage: string,
    siteLanguage: string,
    siteLocale: string,
    siteName: string,
    siteUrl: string,
    siteTitle: string,
    titleSeparator: string,
    titleTemplate: string,
    twitterUsername: string
}

export default function useSiteMetadata(): IuseSiteMetadata {
    const { site } = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        metadata {
                            authorName
                            authorFirstName
                            authorLastName
                            businessAddress1
                            businessAddress2
                            businessCountry
                            businessCoC
                            businessIBAN
                            businessName
                            businessVAT
                            componentAboutTitle
                            componentContactTitle
                            componentPricingDescription
                            componentPricingTitle
                            componentServicesDescription
                            componentServicesTitle
                            pageHomeDescription
                            pageHomeImage
                            pageHomeSubtitle
                            pageHomeTitle
                            pageLandingDescription
                            pageLandingTitle
                            pagePortfolioDescription
                            pagePortfolioImage
                            pagePortfolioTitle
                            pageRecommendedDescription
                            pageRecommendedTitle
                            pageServicesDescription
                            pageServicesImage
                            pageServicesTitle
                            pageWikiDescription
                            pageWikiTitle
                            siteDescription
                            siteImage
                            siteLanguage
                            siteLocale
                            siteName
                            siteUrl
                            siteTitle
                            titleSeparator
                            titleTemplate
                            twitterUsername
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.metadata;
}
