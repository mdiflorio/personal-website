import Link from "next/link";
import Router from "next/router";

import ImageGallery from "react-image-gallery";
import BackButton from "../../components/BackButton";

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

export default function UconnectedVoipApp() {
    return (
        <>
            <BackButton />
            <div className="project-page">
                <div className="project-container">
                    <h1 className="content-title">
                        uConnected VoIP application
                    </h1>
                    <div className="margin-vertical">
                        <ImageGallery
                            items={images}
                            showFullscreenButton={false}
                            showPlayButton={false}
                        />
                    </div>
                    <p>
                        An IOS and Android application built using React native
                        for uConnected. The app allows the clients of uConnected
                        to connect and make calls through their VoIP service and
                        includes various features such as user authentication,
                        access to the device's contacts list complete with an
                        alphabetical scroll list, a keypad, and an integration
                        of uConnected's dashboard.\n\nThe app incorporates a
                        variety of libraries such as Redux, React Native
                        Navigation and React Native PJSIP. It contains a range
                        of animations to ensure the user experience is smooth
                        and in line with a native user experience.\n\nYou can
                        visit uConnected's website{" "}
                        <a target="_blank" href="https://www.uconnected.com.au">
                            here
                        </a>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}
