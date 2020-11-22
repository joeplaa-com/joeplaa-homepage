import React from 'react'
import SEO from 'react-seo-component'
import About from '../components/about'
import Banner from '../components/banner'
import Contact from '../components/contact'
import Pricing from '../components/pricing'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { content, navigation } from '../utils/data'

const Home = () => {
    const { pageHomeDescription, pageHomeImage, pageHomeSubtitle, pageHomeTitle, siteLanguage, siteLocale, siteName, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    return (
        <>
            <SEO
                title={pageHomeTitle}
                description={pageHomeDescription || `nothin’`}
                image={`${siteUrl}${pageHomeImage}`}
                pathname={`${siteUrl}${navigation.home}`}
                titleSeparator={titleSeparator}
                titleTemplate={titleTemplate}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <Banner
                title={content.WelcomeTo + ' ' + siteName}
                subtitle={pageHomeSubtitle}
                src="home-banner-code.jpg"
                alt="beach banner" />

            <About className='section-home background1' />

            <Pricing className='section-home background2' />

            <Contact className='section-home background3' />
        </>
    );
};

export default Home;
