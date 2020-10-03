import React from 'react'
import SEO from 'react-seo-component'
import About from '../components/about'
import Banner from '../components/banner'
import Contact from '../components/contact'
import Layout from '../components/layout'
import Pricing from '../components/pricing'
import Services from '../components/Services'
import { metaData, navigation } from '../utils/data'

const Home = () => {
    return (
        <>
            <Layout>
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
                    title={metaData.HomeTitle + ' ' + metaData.SiteName}
                    subtitle={metaData.HomeSubtitle}
                    src="home-banner-code.jpg"
                    alt="beach banner" />

                <About className='section-home background1' />

                <Services className='section-home background2' />

                <Pricing className='section-home background3' />

                <Contact className='section-home background4' />
            </Layout>
        </>
    );
};

export default Home;
