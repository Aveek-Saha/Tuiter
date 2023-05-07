import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRetweet,
    faArrowUpFromBracket,
    faHeart as faHeartSolid,
    faThumbsDown as faThumbsSolid
} from "@fortawesome/free-solid-svg-icons";
import {
    faComment,
    faHeart as faHeartReg,
    faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";

import { useDispatch } from "react-redux";

import { updateTuitThunk } from "../../services/tuits-thunks";

export default function TuitStats({ post }) {
    const dispatch = useDispatch();
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
                onClick={() => {
                    let new_likes = post.likes;
                    if (!post.liked) new_likes += 1;
                    else new_likes -= 1;
                    dispatch(
                        updateTuitThunk({
                            ...post,
                            likes: new_likes,
                            liked: !post.liked,
                        })
                    );
                }}
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
            <button
                onClick={() => {
                    let new_dislikes = post.dislikes;
                    if (!post.disliked) new_dislikes += 1;
                    else new_dislikes -= 1;
                    dispatch(
                        updateTuitThunk({
                            ...post,
                            dislikes: new_dislikes,
                            disliked: !post.disliked,
                        })
                    );
                }}
                className="btn btn-link col text-muted text-decoration-none"
            >
            {!post.disliked && 
                <FontAwesomeIcon icon={faThumbsDown} />}
            {post.disliked && (
                <FontAwesomeIcon
                    icon={faThumbsSolid}
                    style={{ color: "red" }}
                />
            )}
                <span> {post.dislikes}</span>
            </button>
            <button className="btn btn-link col text-muted text-decoration-none">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </button>
        </div>
    );
}
