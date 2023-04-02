import React, { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import About from '../components/about';
import Banner from '../components/banner';
import Contact from '../components/contact';
import { metadata, urls } from '../data/metadata';

const Home = (): ReactElement => {
    return (
        <>
            <NextSeo
                title={metadata.pageHomeTitle}
                description={metadata.pageHomeDescription || 'nothin’'}
                openGraph={{
                    url: urls.internal.home,
                    title: metadata.pageHomeTitle,
                    description: metadata.pageHomeDescription,
                    images: [
                        {
                            url: urls.internal.public + metadata.pageHomeImage

                        }
                    ]
                }}
            />

            <Banner />

            <About className='section-home background2' />

            <Contact className='section-home background3' />
        </>
    );
};

export default Home;
