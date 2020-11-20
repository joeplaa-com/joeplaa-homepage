import React from 'react'
import SEO from 'react-seo-component'
import About from '../components/about'
import Banner from '../components/banner'
import Contact from '../components/contact'
import Layout from '../components/layout'
import Pricing from '../components/pricing'
import { content, metaData, navigation } from '../utils/data'

const Home = () => {
    return (
        <>
            <Layout navbarLightText={true}>
                <SEO
                    title={metaData.HomeTitle}
                    description={metaData.HomeDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.HomeImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.home}`}
                    titleTemplate={metaData.TitleTemplate}
                    titleSeparator={metaData.TitleSeparator}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <Banner
                    title={content.WelcomeTo + ' ' + metaData.SiteName}
                    subtitle={metaData.HomeSubtitle}
                    src="home-banner-code.jpg"
                    alt="beach banner" />

                <About className='section-home background1' />

                <Pricing className='section-home background2' />

                <Contact className='section-home background3' />
            </Layout>
        </>
    );
};

export default Home;
