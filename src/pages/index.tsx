import React, { useEffect } from 'react'
import SEO from 'react-seo-component'
import { navigate } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { navigation } from '../utils/data'

export default (props) => {
    const {
        description,
        title,
        titleTemplate,
        image,
        siteUrl,
        siteLanguage,
        siteLocale,
        twitterUsername,
    } = useSiteMetadata()

    const { location } = props;
    const pathname = location.pathname;
    useEffect(() => {
        if (pathname === '/') {
            navigate(navigation.home);
        }
    }, []);

    return (
        <SEO
            title={title}
            titleTemplate={titleTemplate}
            description={description || `nothin’`}
            image={`${siteUrl}${image}`}
            pathname={siteUrl}
            siteLanguage={siteLanguage}
            siteLocale={siteLocale}
            twitterUsername={twitterUsername}
        />
    );
};
