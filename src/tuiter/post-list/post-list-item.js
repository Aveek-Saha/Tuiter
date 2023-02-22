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
                <div className="list-group-item pt-3 wd-post-list-item border border-light">
                    {post.retweeted && (
                        <div className="row align-items-center mb-1">
                            <div className="col-1 px-0"></div>
                            <div className="col-11 text-secondary">
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
                            <div className="row align-items-center">
                                <div className="col-11">
                                    <span className="fw-bolder">
                                        {post.userName}{" "}
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-primary"
                                    />
                                    <span className="text-secondary">
                                        {" "}
                                        @{post.userHandle} • {post.time}
                                    </span>
                                </div>
                                <div className="col-1">
                                    <FontAwesomeIcon
                                        icon={faEllipsis}
                                        className="text-secondary float-end"
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
                            <div className="row mb-2">
                                <a
                                    href="/#"
                                    className="col text-secondary text-decoration-none"
                                >
                                    <FontAwesomeIcon
                                        icon={faComment}
                                        className="pe-2"
                                    />
                                    <span>{post.reply}</span>
                                </a>
                                <a
                                    href="/#"
                                    className="col text-secondary text-decoration-none"
                                >
                                    <FontAwesomeIcon
                                        icon={faRetweet}
                                        className="pe-2"
                                    />
                                    <span>{post.retweet}</span>
                                </a>
                                <a
                                    href="/#"
                                    className="col text-secondary text-decoration-none"
                                >
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className="pe-2"
                                    />
                                    <span>{post.like}</span>
                                </a>
                                <a
                                    href="/#"
                                    className="col text-secondary text-decoration-none"
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowUpFromBracket}
                                        className="pe-2"
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
