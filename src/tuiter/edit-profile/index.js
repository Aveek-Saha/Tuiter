import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../reducers/profile-reducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const EditProfileComponent = () => {
    const profile = useSelector((state) => state.profile);

    let [userName, setUserName] = useState(
        profile.firstName + " " + profile.lastName
    );
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();

    const saveClickHandler = () => {
        const firstName = userName.split(" ")[0];
        let handle = "@" + userName;
        handle = handle.replace(/\s/g, "");
        handle = handle.toLowerCase();

        const userData = {
            firstName: firstName,
            lastName: userName.slice(firstName.length + 1),
            handle: handle,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
        };
        dispatch(updateUser(userData));
    };

    const formatDateMM_dd_yyyy = (inputDate) => {
        const [year, month, date] = inputDate.split("-");
        return month + "/" + date + "/" + year;
    };

    const formatDateYYYY_MM_dd = (inputDate) => {
        return new Date(inputDate).toISOString().split("T")[0];
    };

    const formatDateMMMDDYYYY = (inputDate) => {
        return new Date(inputDate).toLocaleString("en-CA", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const [edit, setEdit] = useState(true);

    return (
        <>
            <div className="row align-items-center justify-content-start pb-1">
                <div className="col-auto">
                    <Link to="/tuiter/profile" className="btn" title="cancel">
                        <FontAwesomeIcon icon={faX} />
                    </Link>
                </div>
                <div className="col-10">
                    <span className="fs-5 fw-bold">Edit Profile</span>
                    <Link
                        to="/tuiter/profile"
                        className="btn btn-dark btn-sm rounded-pill position-relative float-end px-3 fw-bold"
                        onClick={saveClickHandler}
                    >
                        Save
                    </Link>
                </div>
            </div>
            <div>
                <img
                    src={`${profile.bannerPicture}`}
                    className="w-100"
                    style={{
                        filter: "brightness(70%)",
                    }}
                    height="300"
                    alt="banner"
                />
            </div>
            <div>
                <img
                    src={`${profile.profilePicture}`}
                    className="rounded-circle img-thumbnail position-relative mb-2"
                    style={{
                        filter: "brightness(70%)",
                        marginTop: "-80px",
                        left: "16px",
                    }}
                    width={140}
                    alt="avatar"
                />
            </div>

            <div className="px-3">
                    <label className="wd-input-label text-secondary">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        defaultValue={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <label className="wd-input-label text-secondary">Bio</label>
                    <textarea
                        rows={3}
                        className="form-control mb-3"
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                    />
                    <label className="wd-input-label text-secondary">
                        Location
                    </label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        defaultValue={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                    <label className="wd-input-label text-secondary">
                        Website
                    </label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        defaultValue={website}
                        onChange={(event) => setWebsite(event.target.value)}
                    />
                <div className="mt-4">
                    <div className="text-secondary">
                        Birth Date .
                        {edit && (
                            <button
                                className="border-0 text-primary bg-transparent"
                                onClick={() => setEdit(false)}
                            >
                                Edit
                            </button>
                        )}
                        {!edit && (
                            <button
                                className="border-0 text-primary bg-transparent"
                                onClick={() => setEdit(true)}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                    {edit && (
                        <div className="pt-1">
                            {formatDateMMMDDYYYY(dateOfBirth)}
                        </div>
                    )}
                    {!edit && (
                        <input
                            type="date"
                            className="form-control"
                            defaultValue={formatDateYYYY_MM_dd(dateOfBirth)}
                            onChange={(event) =>
                                setDateOfBirth(
                                    formatDateMM_dd_yyyy(event.target.value)
                                )
                            }
                        />
                    )}
                </div>
                <div className="fw-bold mt-4">
                    Switch to professional
                </div>
            </div>
        </>
    );
};
export default EditProfileComponent;
