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
                            React, Vue.js, jQuery
                        </p>
                        <p className="description">
                            <span className="colored-text">Databases: </span>
                            MySQL, MongoDB
                        </p>
                        <p className="description">
                            <span className="colored-text">DevOps: </span>
                            Docker, Ansible, Gitlab CI
                        </p>
                        <div style={{ marginTop: "8rem" }} id="projects"></div>
                    </FadeInWhenVisible>
                </div>

                <div className="halfContainer">
                    <FadeInWhenVisible>
                        <h1 className="content-title">Professional Projects</h1>
                        <p className="description">
                            <Link href="/projects/disaster-recovery-scheduler">
                                <a>Disaster Recovery Scheduler</a>
                            </Link>{" "}
                            - Vue.js, Django
                        </p>
                        <p className="description">
                            <Link href="/projects/monitoring-system">
                                <a>Monitoring System</a>
                            </Link>{" "}
                            - Vue.js, Django, Node.js
                        </p>
                        <p className="description">
                            <Link href="/projects/erp-invoice-importer">
                                <a>ERP Invoice Importer</a>
                            </Link>{" "}
                            - PHP
                        </p>
                        <p className="description">
                            <Link href="/projects/uconnected-voip-app">
                                <a>uConnected VoIP application</a>
                            </Link>{" "}
                            - React Native, IOS, Android.
                        </p>
                    </FadeInWhenVisible>
                </div>
                <div className="halfContainer">
                    <FadeInWhenVisible>
                        <h1 className="content-title">Lets chat :)</h1>
                        <a
                            className="description"
                            href="mailto:madhava.diflorio@gmail.com"
                        >
                            matt.diflorio@gmail.com
                        </a>
                    </FadeInWhenVisible>
                </div>
            </div>
        );
    }
}
