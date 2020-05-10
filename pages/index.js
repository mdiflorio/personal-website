import React from "react";
import Head from "next/head";
import Link from "next/link";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

export default class Home extends React.Component {
    render() {
        return (
            <div className="page">
                <Head>
                    <title>Matt Di Florio</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="container">
                    <FadeInWhenVisible>
                        <h1 className="title">Matt Di Florio</h1>
                        <h3 className="subTitle">Software Developer</h3>
                    </FadeInWhenVisible>
                </div>
                <div className="halfContainer">
                    <FadeInWhenVisible>
                        <h3 className="description">
                            I love writing code in{" "}
                            <span className="colored-text">JavaScript</span> and{" "}
                            <span className="colored-text">Python</span>.{" "}
                            Everything from{" "}
                            <span className="colored-text">React</span> to{" "}
                            <span className="colored-text">Vue JS</span> on the
                            frontend.{" "}
                            <span className="colored-text">Django</span> and{" "}
                            <span className="colored-text">Node.js</span> for
                            the backend. Mobile applications with{" "}
                            <span className="colored-text">React Native</span>.
                        </h3>
                    </FadeInWhenVisible>
                </div>
                <div className="halfContainer">
                    <FadeInWhenVisible>
                        <h1 className="content-title">Skills</h1>
                        <p className="description">
                            <span className="colored-text">Backend: </span>
                            Node.js, Express.js, Django
                        </p>
                        <p className="description">
                            <span className="colored-text">Frontend: </span>
                            React, Redux, VueJS, jQuery
                        </p>
                        <p className="description">
                            <span className="colored-text">Databases: </span>
                            MySQL, MongoDB
                        </p>
                        <p className="description">
                            <span className="colored-text">Languages: </span>
                            JavaScript, Python, PHP
                        </p>
                    </FadeInWhenVisible>
                </div>

                <div className="halfContainer">
                    <FadeInWhenVisible>
                        <h1 className="content-title">Experience</h1>
                        <h3 className="description">React, VueJS, jQuery.</h3>
                        <h3 className="description">NodeJs, Django</h3>
                        <h3 className="description">MySQL, MongoDB</h3>
                    </FadeInWhenVisible>
                </div>
                <style jsx>{`
                    .page {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    .halfContainer,
                    .container {
                        min-height: 100vh;
                        padding: 5rem;
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                    }

                    .container {
                        justify-content: center;
                        align-items: center;
                    }

                    .halfContainer {
                        min-height: 80vh;
                    }

                    footer {
                        width: 100%;
                        height: 100px;
                        border-top: 1px solid #eaeaea;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    footer img {
                        margin-left: 0.5rem;
                    }

                    footer a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    a {
                        color: inherit;
                        text-decoration: none;
                    }

                    .content-title,
                    .title {
                        margin: 0;
                        line-height: 1.15;
                        font-size: 4rem;
                        text-align: left;
                    }

                    .subTitle,
                    .description {
                        font-size: 2rem;
                    }

                    .title,
                    .subTitle {
                        text-align: center;
                    }

                    .description {
                        line-height: 1.5;
                        text-align: left;
                    }

                    .colored-text {
                        color: #40bad5;
                    }
                `}</style>

                <style jsx global>{`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
                            Droid Sans, Helvetica Neue, sans-serif;
                        font-weight: 100;
                        background-color: #001724;
                        color: #f5f5f5;
                    }

                    * {
                        box-sizing: border-box;
                    }
                `}</style>
            </div>
        );
    }
}
