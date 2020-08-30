import Link from "next/link";
import BrowserCheck from './browser-check'

export default function Header() {
    return (
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
            <div>
                <BrowserCheck />
                <h2>
                    <Link href="/">
                        <a>Blog</a>
                    </Link>
                </h2>
            </div>
        </header>
    );
}
