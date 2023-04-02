import React, { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import TreeComponent from '../components/tree';
import { metadata, urls } from '../data/metadata';

const Shop = (): ReactElement => {
    return (
        <>
            <NextSeo
                title={metadata.pageFamilyTreeTitle}
                description={metadata.pageFamilyTreeDescription || 'nothin’'}
                openGraph={{
                    url: urls.internal.tree,
                    title: metadata.pageFamilyTreeTitle,
                    description: metadata.pageFamilyTreeDescription,
                    images: [
                        {
                            url: urls.internal.public + metadata.pageFamilyTreeImage
                        }
                    ]
                }}
            />

            <TreeComponent className='section-fill blue-dark' />
        </>
    );
};

export default Shop;
