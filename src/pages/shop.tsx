import React, { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import ShopComponent from '../components/shop';
import { metadata, urls } from '../data/metadata';

const Shop = (): ReactElement => {
    return (
        <>
            <NextSeo
                title={metadata.pageShopTitle}
                description={metadata.pageShopDescription || 'nothin’'}
                openGraph={{
                    url: urls.internal.shop,
                    title: metadata.pageShopTitle,
                    description: metadata.pageShopDescription,
                    images: [
                        {
                            url: urls.internal.public + metadata.pageShopImage,

                        }
                    ]
                }}
            />

            <ShopComponent className='section-fill blue-dark' />
        </>
    );
};

export default Shop;
