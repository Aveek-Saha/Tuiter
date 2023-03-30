import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRetweet,
    faArrowUpFromBracket,
    faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
    faComment,
    faHeart as faHeartReg,
} from "@fortawesome/free-regular-svg-icons";

import { useDispatch } from "react-redux";
import { likeTuit } from "./tuits-reducer";

export default function TuitStats({ post }) {
    const dispatch = useDispatch();
    const likeTuitClickHandler = () => {
        dispatch(likeTuit(post));
    };
    return (
        <div className="row justify-content-center mb-0 mt-2">
            <button className="btn btn-link col text-muted text-decoration-none">
                <FontAwesomeIcon icon={faComment} />
                <span> {post.replies}</span>
            </button>
            <button className="btn btn-link col text-muted text-decoration-none">
                <FontAwesomeIcon icon={faRetweet} />
                <span> {post.retweets}</span>
            </button>
            <button
                onClick={likeTuitClickHandler}
                className="btn btn-link col text-muted text-decoration-none"
            >
                {!post.liked && <FontAwesomeIcon icon={faHeartReg} />}
                {post.liked && (
                    <FontAwesomeIcon
                        icon={faHeartSolid}
                        style={{ color: "red" }}
                    />
                )}
                <span> {post.likes}</span>
            </button>
            <button className="btn btn-link col text-muted text-decoration-none">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </button>
        </div>
    );
}
