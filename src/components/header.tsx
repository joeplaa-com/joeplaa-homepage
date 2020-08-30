import Link from "next/link";
import BrowserCheck from './browser-check'

export default function Header() {
    return (
        <header>
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
