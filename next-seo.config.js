import { urls } from './src/lib/constants'
import data from './src/lib/data.json'

export default {
    openGraph: {
        type: 'website',
        url: urls.public + '/',
        locale: 'en_US',
        site_name: data.SiteName,
        title: data.SiteTitle,
        titleTemplate: data.SiteTitle + ' | %s',
        description: data.SiteDescription,
        images: [
            {
                url: urls.public + '/og_logo.png',
                width: 300,
                height: 300,
                alt: 'jodiBooks logo',
            }
        ]
    }
};