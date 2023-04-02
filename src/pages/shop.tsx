import React, { ReactElement } from 'react';
import SEO from 'react-seo-component';
import ShopComponent from '../components/shop';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';

const Shop = (): ReactElement => {
    const { pageShopDescription, pageShopImage, pageShopTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { shop } = useSiteNavigation();
    return (
        <>
            <SEO
                title={pageShopTitle}
                description={pageShopDescription || 'nothin’'}
                image={`${siteUrl}${pageShopImage}`}
                pathname={`${siteUrl}${shop}`}
                titleSeparator={titleSeparator}
                titleTemplate={titleTemplate}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <ShopComponent className='section-fill blue-dark' />
        </>
    );
};

export default Shop;
