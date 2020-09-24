import React from 'react'
import SEO from 'react-seo-component'
import Image from '../components/image'
import Layout from '../components/layout'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { siteInfo } from '../utils/data'

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
                <div className='image-container shadow'>
                    <Image
                        src="home-banner-beach.jpg"
                        className="mx-auto shadow-xl"
                        alt="beach banner"
                    />
                    <div className='overlay'>
                        <h1 className='display-1'>{siteInfo.HomeTitle}</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="pt-5">
                        <header className="py-5 mt-5">
                            <h1 className="display-4">Transparent Navbar</h1>
                            <p className="lead mb-0">Using Bootstrap 4 and Javascript, create a transparent navbar which changes its style on scroll.</p>
                            <p className="lead mb-0">Snippet by
                                    <a href="https://bootstrapious.com">
                                    <u>Bootstrapious</u>
                                </a>
                            </p>
                        </header>
                        <div className="py-5">
                            <p className="lead">Lorem ipsum dolor sit amet, <strong className="font-weight-bold">consectetur adipisicing </strong>elit. Explicabo consectetur odio voluptatum facere animi temporibus, distinctio tempore enim corporis quam <strong className="font-weight-bold">recusandae </strong>placeat! Voluptatum voluptate, ex modi illum quas nam distinctio.</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="py-5">
                            <p className="lead">Lorem ipsum dolor sit amet, <strong className="font-weight-bold">consectetur adipisicing </strong>elit. Explicabo consectetur odio voluptatum facere animi temporibus, distinctio tempore enim corporis quam <strong className="font-weight-bold">recusandae </strong>placeat! Voluptatum voluptate, ex modi illum quas nam distinctio.</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
