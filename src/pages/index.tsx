import React, { useEffect } from 'react'
import SEO from 'react-seo-component'
import { navigate } from 'gatsby'
import { metaData, navigation } from '../utils/data'
import { PageProps } from '../types'

const Index = (props: PageProps) => {
    const { location } = props;
    const pathname = location.pathname;
    useEffect(() => {
        if (pathname === '/') {
            navigate(navigation.home);
        }
    }, [pathname]);

    return (
        <SEO
            title={metaData.SiteTitle}
            description={metaData.SiteDescription || `nothin’`}
            image={`${metaData.SiteUrl}${metaData.SiteImage}`}
            pathname={`${metaData.SiteUrl}`}
            titleTemplate={metaData.PageTitle}
            siteLanguage={metaData.SiteLanguage}
            siteLocale={metaData.SiteLocale}
            twitterUsername={metaData.TwitterUsername}
        />
    );
};

export default Index;
