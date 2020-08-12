import Head from 'next/head';
import Footer from "./footer";
import Meta from "./Meta";
import { ILayoutProps } from '../interfaces';
import { CMS_NAME } from '../lib/constants'

export default function Layout(props: ILayoutProps) {
    return (
        <>
            <Head>
                <title>Next.js Blog Example with {CMS_NAME}</title>
            </Head>

            <Meta
                siteTitle={props.siteTitle}
                siteDescription={props.siteDescription}
            />

            <header>
                <noscript>
                    <div style={{ height: '100vw', width: '100%' }}>
                        <div style={{ padding: '20px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                            <h1>Oops!!!!</h1>
                            <p>This website only works with JavaScript enabled.</p>
                            <p>This website explains <a href="https://www.enable-javascript.com/nl/">how to enable JavaScript in your browser.</a></p>
                        </div>
                    </div>
                </noscript>
            </header>

            <div className="min-h-screen">
                <main>{props.children}</main>
            </div>

            <Footer />
        </>
    );
}
