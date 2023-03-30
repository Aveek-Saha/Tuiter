import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faImage,
    faFile,
    faFaceSmile,
} from "@fortawesome/free-regular-svg-icons";

import {
    faChartSimple,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { createTuit } from "../tuits/tuits-reducer";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tweet: whatsHappening,
        };
        dispatch(createTuit(newTuit));
        setWhatsHappening("");
    };

    return (
        <div className="row">
            <div className="col-auto">
                <img
                    src="https://npr.brightspotcdn.com/legacy/sites/wksu/files/201512/nasa_logo.jpg"
                    width={60}
                    alt="profile"
                />
            </div>
            <div className="col-10">
                <textarea
                    value={whatsHappening}
                    placeholder="What's happening?"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}
                ></textarea>
                <div>
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}
                    >
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <FontAwesomeIcon icon={faImage} className={"me-3"} />
                        <FontAwesomeIcon icon={faFile} className={"me-3"} />
                        <FontAwesomeIcon
                            icon={faChartSimple}
                            className={"me-3"}
                        />
                        <FontAwesomeIcon
                            icon={faFaceSmile}
                            className={"me-3"}
                        />
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className={"me-3"}
                        />
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr />
            </div>
        </div>
    );
};
export default WhatsHappening;
