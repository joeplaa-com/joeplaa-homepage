import React from 'react'
import SEO from 'react-seo-component'
import About from '../components/about'
import Banner from '../components/banner'
import Contact from '../components/contact'
import Layout from '../components/layout'
import Pricing from '../components/pricing'
import Services from '../components/Services'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { siteInfo } from '../utils/data'

export default () => {
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
    return (
        <>
            <Layout>
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

                <Banner
                    title={siteInfo.HomeTitle + ' ' + siteInfo.SiteName}
                    subtitle={siteInfo.HomeSubtitle}
                    src="home-banner-code.jpg"
                    alt="beach banner" />

                <About backgroundColor='background1' />
                
                <Services backgroundColor='background2' />

                <Pricing backgroundColor='background3' />

                <Contact backgroundColor='background4' />
            </Layout>
        </>
    );
};
