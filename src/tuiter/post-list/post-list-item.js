import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRetweet,
    faCircleCheck,
    faEllipsis,
    faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import NestedTweet from "./nested-tweet";
import posts from "./posts.json";

const PostListItem = ({ post }) => {
    const filterById = (jsonObject, id) => {
        return jsonObject.filter(function (jsonObject) {
            return jsonObject["_id"] === id;
        })[0];
    };

    return (
        <>
            {!post.type && (
                <div className="list-group-item pt-3">
                    {post.retweeted && (
                        <div className="row mb-1">
                            <div className="col-1"></div>
                            <div className="col-11 text-muted">
                                <FontAwesomeIcon icon={faRetweet} />
                                <span> {post.retweeted} Retweeted</span>
                            </div>
                        </div>
                    )}
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
                                        icon={faEllipsis}
                                        className="text-muted float-end"
                                    />
                                </div>
                            </div>
                            {post.title}
                            {post.nestedPost && (
                                <NestedTweet
                                    post={post.nestedPost}
                                    tweet={
                                        post.nestedPost.type === "tweet"
                                            ? filterById(
                                                  posts,
                                                  post.nestedPost.tweetId
                                              )
                                            : null
                                    }
                                />
                            )}
                            <div className="row justify-content-around mb-2">
                                <a
                                    href="/#"
                                    className="col text-muted text-decoration-none"
                                >
                                    <FontAwesomeIcon icon={faComment} />
                                    <span> {post.reply}</span>
                                </a>
                                <a
                                    href="/#"
                                    className="col text-muted text-decoration-none"
                                >
                                    <FontAwesomeIcon icon={faRetweet} />
                                    <span> {post.retweet}</span>
                                </a>
                                <a
                                    href="/#"
                                    className="col text-muted text-decoration-none"
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span> {post.like}</span>
                                </a>
                                <a
                                    href="/#"
                                    className="col text-muted text-decoration-none"
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowUpFromBracket}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PostListItem;
