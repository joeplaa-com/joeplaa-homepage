import React, { ReactElement } from 'react';
import SEO from 'react-seo-component';
import About from '../components/about';
import Banner from '../components/banner';
import Contact from '../components/contact';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import { content } from '../utils/content';

const Home = (): ReactElement => {
    const { pageHomeDescription, pageHomeImage, pageHomeSubtitle, pageHomeTitle, siteLanguage, siteLocale, siteName, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { home } = useSiteNavigation();
    return (
        <>
            <SEO
                title={pageHomeTitle}
                description={pageHomeDescription || 'nothin’'}
                image={`${siteUrl}${pageHomeImage}`}
                pathname={`${siteUrl}${home}`}
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

            <About className='section-home background2' />

            <Contact className='section-home background3' />
        </>
    );
};

export default Home;
