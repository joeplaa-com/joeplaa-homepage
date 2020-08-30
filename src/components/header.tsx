import Link from "next/link";

export default function Header() {
    return (
        <header style={{ backgroundColor: "blue" }}>
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
                <h2>
                    <Link href="/">
                        <a className="hover:underline">Blog</a>
                    </Link>
                </h2>
            </div>
        </header>
    );
}
