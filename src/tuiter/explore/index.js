import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGear } from "@fortawesome/free-solid-svg-icons";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input
                        placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5"
                    />

                    <div
                        className="position-absolute 
                       wd-nudge-up"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className="col-1">
                    <div className="wd-bottom-4 text-primary float-end fs-2 position-relative">
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a href="#" className="nav-link active">
                        For You
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Trending
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        News
                    </a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img
                    src="https://www.travelandleisure.com/thmb/LMxP8Mh5im3R7TmB1gtVZUr6bZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spaceship-neptune-capsule-exterior-SPACELOUNGE0422-fcc279863ded489b9475d97b1e015f9c.jpg"
                    className="w-100"
                />
                <h1 className="position-absolute wd-nudge-up text-white">
                    Starships taking off
                </h1>
            </div>
            <PostSummaryList />
        </>
    );
};
export default ExploreComponent;
