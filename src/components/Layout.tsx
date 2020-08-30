import Head from 'next/head';
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import { ILayoutProps } from '../interfaces';
import data from '../lib/data.json'

export default function Layout(props: ILayoutProps) {
    return (
        <>
            <Head>
                <title>{data.HomeTitle}</title>
            </Head>

            <Meta
                siteTitle={props.siteTitle}
                siteDescription={props.siteDescription}
            />

            <Header />

            <div>
                <main>{props.children}</main>
            </div>

            <Footer />
        </>
    );
}
