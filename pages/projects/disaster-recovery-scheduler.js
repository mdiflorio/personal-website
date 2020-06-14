import Link from "next/link";

import ImageGallery from "react-image-gallery";
import BackButton from "../../components/BackButton";

const images = [
    {
        original: "/images/projects/scheduler/scheduler-1.png",
        thumbnail: "/images/projects/scheduler/scheduler-1.png",
    },
    {
        original: "/images/projects/scheduler/scheduler-2.png",
        thumbnail: "/images/projects/scheduler/scheduler-2.png",
    },
    {
        original: "/images/projects/scheduler/scheduler-3.png",
        thumbnail: "/images/projects/scheduler/scheduler-3.png",
    },
];

export default function DisasterRecoveryScheduler() {
    return (
        <>
            <BackButton />
            <div className="project-page">
                <div className="project-container">
                    <h1 className="content-title">
                        Disaster Recovery Scheduler
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
                        Nuabee's main service is the Disaster Recovery Plan.
                        This is a highly customised B2B service which allows
                        companies to replicate their infrastructure in the cloud
                        in the case of an emergency. Seeing as the service is
                        tailor-made for each company, it demands a high level of
                        testing from both the support staff at Nuabee and the
                        clients.
                    </p>
                    <h2>Problem</h2>
                    <p>
                        As the Disaster Recovery Plans can take hours to
                        complete, we faced a problem where the service was not
                        operational for testing during the hours scheduled with
                        the clients.
                    </p>
                    <h2>Solution</h2>
                    <p>
                        A solution to this problem was to build a platform which
                        allows us to schedule testing with the clients and
                        automatically launch the Disaster Recovery Plans before
                        the allocated time so that everything is ready for
                        testing. Any modifications to the schedule would also
                        update the launch time for the plan.
                    </p>
                    <h2>Technologies</h2>
                    <p>
                        <span className="colored-text">Backend: </span>
                        Django
                    </p>
                    <p>
                        <span className="colored-text">Frontend: </span>
                        Vue.js, Django
                    </p>
                    <p>
                        <span className="colored-text">Databases: </span>
                        MariaDB
                    </p>
                </div>
            </div>
        </>
    );
}
