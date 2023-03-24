import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NestedTweet = ({ post, tweet }) => {
    const imagePost = () => {
        return (
            <img
                src={`${post.postImage}`}
                className="w-100 rounded-3"
                alt="Post"
            />
        );
    };

    const quoteTweet = () => {
        return (
            <div className="p-3">
                <div>
                    <img
                        src={`${tweet.userAvatar}`}
                        className="rounded-circle m-1"
                        width="25px"
                        height="25px"
                        alt="avatar"
                    />
                    <span className="fw-bold">{tweet.userName} </span>
                    <FontAwesomeIcon
                        icon="fa-solid fa-circle-check"
                        className="text-primary"
                    />
                    <span className="text-muted">
                        {" "}
                        @{tweet.userHandle} • {tweet.time}
                    </span>
                </div>
                {tweet.title}
            </div>
        );
    };

    return (
        <div className="my-3">
            {post.type && (
                <div className="border rounded-4">
                    {post.type === "image" && imagePost()}
                    {post.type === "tweet" && quoteTweet()}
                </div>
            )}
        </div>
    );
};

export default NestedTweet;
