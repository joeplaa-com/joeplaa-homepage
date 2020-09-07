import { urls } from './src/lib/constants'
import data from './src/lib/data.json'

export default {
    openGraph: {
        type: 'website',
        url: process.env.NEXT_PUBLIC_URL + '/',
        locale: 'en_US',
        site_name: data.siteInfo.SiteName,
        title: data.siteInfo.SiteTitle,
        titleTemplate: data.siteInfo.SiteTitle + ' | %s',
        description: data.siteInfo.SiteDescription,
        images: [
            {
                url: process.env.NEXT_PUBLIC_URL + '/og_logo.png',
                width: 300,
                height: 300,
                alt: 'jodiBooks logo',
            }
        ]
    }
};