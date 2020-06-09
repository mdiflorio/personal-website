import "../styles/global.scss";

export default function App({ Component, pageProps }) {
    console.log("Getting called");
    return <Component {...pageProps} />;
}
