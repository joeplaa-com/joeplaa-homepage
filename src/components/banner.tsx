import Image from 'next/image';
import React, { ReactElement } from 'react';
import Social from './social';
import { content } from '../data/content';
import { metadata } from '../data/metadata';
import homeBanner from '../../public/images/home-banner-code.jpg';

const Banner = (): ReactElement => {
    return (
        <section id={content.Banner}>
            <div className='image-container'>
                <Image
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    src={homeBanner}
                    alt="home code banner"
                    className="mx-auto image-position"
                />
                <div className="image-overlay-image"></div>
                <div className='image-overlay-text flex-column text-center'>
                    <h1 className='display-1'>{content.WelcomeTo + ' ' + metadata.siteName}</h1>
                    <h2>{metadata.pageHomeSubtitle}</h2>
                    <Social context='banner' color='light' size='2rem' />
                </div>
            </div>
        </section>
    );
};

export default Banner;
