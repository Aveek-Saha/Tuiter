import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faLocationDot,
    faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    const DOB = new Date(profile.dateOfBirth).toLocaleString("en-CA", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const [month, year] = profile.dateJoined.split("/");
    const DOJ = new Date(parseInt(year), parseInt(month)).toLocaleString(
        "en-CA",
        { month: "long", year: "numeric" }
    );

    const navigate = useNavigate();
    return (
        <>
            <div className="row align-items-center justify-content-start">
                <div className="col-1">
                    <button
                        type="button"
                        className="btn"
                        title="back"
                        onClick={() => navigate(-1)}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </div>
                <div className="col-11 mb-2">
                    <h5 className="fw-bold mb-0">
                        {profile.firstName} {profile.lastName}
                    </h5>
                    <div className="text-muted">{profile.tuits} Tuits</div>
                </div>
            </div>
            <img
                src={`${profile.bannerPicture}`}
                className="w-100"
                height="300"
                alt="banner"
            />
            <img
                src={`${profile.profilePicture}`}
                className="rounded-circle img-thumbnail position-relative mb-2"
                style={{
                    marginTop: "-60px",
                    left: "16px",
                }}
                width={120}
                alt="banner"
            />
            <Link
                to="/tuiter/profile/edit-profile"
                type="button"
                className="btn btn-outline-dark rounded-pill float-end mt-2"
            >
                Edit Profile
            </Link>
            <div className="px-3">
                <h5 className="fw-bold mb-0 mt-3 ">
                    {profile.firstName} {profile.lastName}
                </h5>
                <div className="text-muted">{profile.handle}</div>

                <div className="mt-2">{profile.bio}</div>

                <div className="text-muted mt-2">
                    <span className="pe-3">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className={"me-2"}
                        />
                        {profile.location}
                    </span>
                    <span className="pe-3">
                        <FontAwesomeIcon
                            icon={faCakeCandles}
                            className={"me-2"}
                        />
                        Born {DOB}
                    </span>
                    <span className="pe-3">
                        <FontAwesomeIcon icon={faCalendar} className={"me-2"} />
                        Joined {DOJ}
                    </span>
                </div>

                <div className="mt-2">
                    <span className="pe-4">
                        <span className="fw-bold">
                            {Number(profile.followingCount).toLocaleString()}{" "}
                        </span>
                        <span className="text-muted">Following</span>
                    </span>
                    <span className="pe-4">
                        <span className="fw-bold">
                            {Number(profile.followersCount).toLocaleString()}{" "}
                        </span>
                        <span className="text-muted">Followers</span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default ProfileComponent;
