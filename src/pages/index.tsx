import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
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
        <>
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
            <Helmet>
                <noscript>
                    {`${<div style={{ height: '100vw', width: '100%' }}>
                        <div style={{ padding: '20px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                            <h1>Oops!!!!</h1>
                            <p>This website only works with JavaScript enabled.</p>
                            <p>This website explains <a href="https://www.enable-javascript.com/nl/">how to enable JavaScript in your browser.</a></p>
                        </div>
                    </div>}`}
                </noscript>
            </Helmet>
        </>
    );
};

export default Index;
