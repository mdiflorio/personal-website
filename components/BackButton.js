import Router from "next/router";

export default function BackButton({ Component, pageProps }) {
    return (
        <h2>
            <a
                style={{ cursor: "pointer", margin: "40px" }}
                onClick={() => Router.back()}
            >
                Back
            </a>
        </h2>
    );
}
