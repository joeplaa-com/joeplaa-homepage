import React, { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import ServicesComponent from '../components/services';
import { metadata, urls } from '../data/metadata';

const Services = (): ReactElement => {
    return (
        <>
            <NextSeo
                title={metadata.pageServicesTitle}
                description={metadata.pageServicesDescription || 'nothin’'}
                openGraph={{
                    url: urls.internal.services,
                    title: metadata.pageServicesTitle,
                    description: metadata.pageServicesDescription,
                    images: [
                        {
                            url: urls.internal.public + metadata.pageServicesImage,

                        }
                    ]
                }}
            />

            <ServicesComponent className='section-fill blue-dark' />
        </>
    );
};

export default Services;
