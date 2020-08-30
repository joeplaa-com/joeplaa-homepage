import React, { useEffect } from 'react';
import Router from 'next/router';
import { BlogJsonLd } from 'next-seo';
import { urls } from '../src/lib/constants'
import data from '../src/lib/data.json'

export default function Index() {
    useEffect(() => {
        const { pathname } = Router;
        if (pathname === '/') {
            Router.push(urls.internal.home);
        }
    }, []);
    return (
        <BlogJsonLd
            datePublished='08/30/2020'
            dateModified='08/30/2020'
            authorName={data.AuthorName}
            title={data.SiteTitle}
            description={data.SiteDescription}
            url={urls.public}
            images={[
                urls.public + '/og_logo.png',
            ]}
        />
    );
}
