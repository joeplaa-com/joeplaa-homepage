module.exports = {
    data: {
        AllRightsReserved: 'All rights reserved.',
        Back: 'Back',
        Backto: 'Back to overview',
        BacktoPortfolio: 'Back to portfolio',
        Blog: 'Blog',
        Continue: 'Continue',
        Filter: 'Filter',
        FilterTags: 'Select tags to show',
        Home: 'Home',
        Howto: 'How-to',
        Info: 'Info',
        Loading: 'Loading...',
        NoOptionsSelect: 'No further tags available',
        Ok: 'Ok',
        Portfolio: 'Portfolio',
        Pricing: 'Pricing',
        Recommended: 'Recommended',
        SelectedTags: 'Selected tags',
        ShowAll: 'Show all',
        ShowModal: 'Show more',
        ShowModalMessage: 'This website does not work properly in your current browser.',
        UnsupportedContinue: 'Press continue to view this site anyway.',
        UnsupportedMessage: 'This website does not work properly in your current browser. Use one of the browser below for the best experience.',
        UnsupportedTitle: 'Browser not supported'
    },
    meta: {
        title: `joeplaa.com`, //sitetitle
        titleTemplate: `joeplaa.com`, //sitename
        description: `Helping people create their digital home.`, //sitedescription
        image: `/images/banner-www-com-white.png`,
        siteUrl: `https://www.joeplaa.com`,
        siteLanguage: `en-US`,
        siteLocale: `en_us`,
        twitterUsername: ``,
        authorName: `Joep van de Laarschot`,
    },
    navigation: {
        blog: process.env.GATSBY_URL_BLOG_URL,
        home: '/home',
        howto: '/howto',
        howtos: '/howtos',
        portfolio: '/portfolio',
        pricing: '/pricing',
        recommended: process.env.GATSBY_URL_BLOG_URL + '/recommended'
    },
    siteInfo: {
        BusinessName: 'Joeplaa',
        HomeDescription: 'Who is Joep and what is Joeplaa?',
        HomeTitle: 'Home',
        HowtoDescription: 'How-to\'s and tutorials on subjects: Ubuntu, file-sharing, virtual machines and website hosting.',
        HowtoTitle: 'How-to',
        LandingDescription: 'Welcome on joeplaa.com. Click on the links to explore further.',
        LandingTitle: 'Landing',
        PageTitle: ' | joeplaa.com',
        PortfolioDescription: 'Examples of my work and skills in front-end development. If you want a website, let me know!',
        PortfolioTitle: 'Portfolio',
        PricingDescription: 'If you want a website, here\'s what it costs.',
        PricingTitle: 'Pricing',
        SiteDescription: 'Helping people create their digital home.',
        SiteName: 'joeplaa.com',
        SiteTitle: 'joeplaa.com',
        Umami: 'https://umami.joeplaa.com/umami.js'
    },
    urls: {
        facebook: 'https://www.facebook.com/joeplaadotcom',
        github: 'https://github.com/joeplaa',
        instagram: 'https://www.instagram.com/joeplaa/',
        linkedin: 'https://www.linkedin.com/in/joeplaa/',
        mailto: 'mailto:info@joeplaa.com',
        website: process.env.GATSBY_URL
    },
}