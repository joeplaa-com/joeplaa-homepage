import React from 'react'
import SEO from 'react-seo-component'
import Image from '../components/image'
import { Layout } from '../components/layout'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

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
                <main>
                    <Image
                        src="home-banner-beach.jpg"
                        className="mx-auto shadow-xl"
                        alt="beach banner"
                    />
                </main>
            </Layout>
        </>
    );
};
