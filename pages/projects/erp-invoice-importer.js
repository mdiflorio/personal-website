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

export default function ErpInvoiceImporter() {
    return (
        <>
            <BackButton />
            <div className="project-page">
                <div className="project-container">
                    <h1 className="content-title">ERP Invoice Importer</h1>
                    <div className="margin-vertical">
                        <ImageGallery
                            items={images}
                            showFullscreenButton={false}
                            showPlayButton={false}
                        />
                    </div>
                    <h2>Context</h2>
                    <p>
                        Chaud Devant is a company in the French Alps which makes
                        ski masks. One of the particularities of the way Chaud
                        Devant works is that they spend the summer searching for
                        clients at the various ski stations throughout Europe,
                        it's only once they have a large number of orders do
                        they start production. This allows them to organise the
                        materials and the workload efficiently.
                    </p>
                    <h2>Problem</h2>
                    <p>
                        One of the downfalls of the large number of orders is
                        that it would take the secretary weeks to enter them all
                        into their ERP. Considering that the orders were already
                        in Excel format, it was a perfect opportunity to
                        automate this process. Surprisingly the ERP that they
                        were using didn't have any third-party modules for
                        importing orders.
                    </p>
                    <h2>Solution</h2>
                    <p>
                        A solution to this problem was to create a module from
                        scratch, which would allow a user to select an Excel
                        file that contained an order and import all of the data
                        into the system. I attempted to imitate the user
                        interface as much as possible to give a native Dolibarr
                        look and feel.
                    </p>
                    <h2>Technologies</h2>
                    <p>
                        <span className="colored-text">Backend: </span>
                        Dolibarr, PHP
                    </p>
                    <p>
                        <span className="colored-text">Frontend: </span>
                        jQuery
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
