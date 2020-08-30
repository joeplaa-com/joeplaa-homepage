import { CMS_NAME } from "../lib/constants";

export default function Intro() {
    return (
        <section>
            <h1>
        Blog.
            </h1>
            <h4>
        A statically generated blog example using{" "}
                <a
                    href="https://nextjs.org/"
                >
          Next.js
                </a>{" "}
        and {CMS_NAME}.
            </h4>
        </section>
    );
}
