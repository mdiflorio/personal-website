import Router from "next/router";
import Link from "next/link";

export default function BackButton({ Component, pageProps }) {
    return (
        <h2>
            <Link href="/#projects">
                <a style={{ cursor: "pointer", margin: "40px" }}>Back</a>
            </Link>
        </h2>
    );
}
