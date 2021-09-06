import { graphql, useStaticQuery } from 'gatsby';

interface IuseSiteSettings {
    breakpoint: string,
    designedBy: string,
    designerName: string,
    designerUrl: string,
    iconSize: string,
    umamiID: string
}

export default function useSiteSettings(): IuseSiteSettings {
    const { site } = useStaticQuery(
        graphql`
            query SITE_SETTINGS_QUERY {
                site {
                    siteMetadata {
                        settings {
                            breakpoint
                            designedBy
                            designerName
                            designerUrl
                            iconSize
                            umamiID
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.settings;
}