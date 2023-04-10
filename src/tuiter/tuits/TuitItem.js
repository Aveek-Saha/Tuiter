import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faX } from "@fortawesome/free-solid-svg-icons";

import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({ post }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    };

    return (
        <>
            <div className="list-group-item pt-3">
                <div className="row">
                    <div className="col-1">
                        <img
                            src={`${post.userAvatar}`}
                            className="rounded-circle"
                            width="48px"
                            height="48px"
                            alt="avatar"
                        />
                    </div>
                    <div className="col-11 ps-4">
                        <div className="row">
                            <div className="col-11">
                                <span className="fw-bolder">
                                    {post.userName}{" "}
                                </span>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className="text-primary"
                                />
                                <span className="text-muted">
                                    {" "}
                                    @{post.userHandle} • {post.time}
                                </span>
                            </div>
                            <div className="col-1">
                                <FontAwesomeIcon
                                    icon={faX}
                                    className="text-muted float-end"
                                    onClick={() => deleteTuitHandler(post._id)}
                                />
                            </div>
                        </div>
                        {post.tweet}
                        <TuitStats post={post} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TuitItem;
