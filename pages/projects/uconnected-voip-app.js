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
                    <h2>Context</h2>
                    <p>
                        uConnected provides a service that allows you to choose
                        a landline, 1800 or 1300 number and you can decide where
                        calls to those numbers are delivered. uConnected
                        provides an amazing range of options such as the ability
                        to switch your selected number at any time, limiting
                        hours that you receive calls and multiple redirections.
                        This gives them a competitive advantage over other large
                        companies that may provide similar services.
                    </p>
                    <h2>Problem</h2>
                    <p>
                        While uConnected has many incredible features, their
                        customers are unable to make outbound calls using their
                        service.
                    </p>
                    <h2>Solution</h2>
                    <p>
                        A solution to this problem was to develop a VoIP
                        application that allowed you to make outbound calls
                        through the service. The basis of this application was
                        on a technology called PJSIP which is an open-source SIP
                        protocol. The application needed to be functional on
                        both Android and IOS.
                    </p>
                    <h2>Note</h2>
                    <p>
                        Even though the application was finished and worked as
                        intended. The team at uConnected was not satisfied with
                        the reliability of the PJSIP. Consequently, the
                        application was never pushed into production.
                    </p>
                    <h2>Technologies</h2>
                    <p>
                        <span className="colored-text">Frontend: </span>
                        React Native, Redux, React-Native-PJSIP
                    </p>
                    <p>
                        <span className="colored-text">Platforms: </span>
                        IOS, Android
                    </p>
                </div>
            </div>
        </>
    );
}
