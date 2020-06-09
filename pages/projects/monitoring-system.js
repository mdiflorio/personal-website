import Link from "next/link";
import Router from "next/router";

import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];

export default function MonitoringSystem() {
    return (
        <>
            <h2>
                <a style={{ cursor: "pointer" }} onClick={() => Router.back()}>
                    Back to home
                </a>
            </h2>
            <div className="project-page">
                <div className="project-container">
                    <h1 className="content-title">Monitoring System</h1>
                    <div className="margin-vertical">
                        <ImageGallery
                            items={images}
                            showFullscreenButton={false}
                            showPlayButton={false}
                        />
                    </div>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
        </>
    );
}
