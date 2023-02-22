import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NestedTweet = ({ post, tweet }) => {
    const imagePost = () => {
        return (
            <img
                src={`${post.postImage}`}
                className="w-100 rounded-4"
                alt="Post"
            />
        );
    };

    const quoteTweet = () => {
        return (
            <div className="px-2 pt-3">
                <div>
                    <img
                        src={`${tweet.userAvatar}`}
                        className="rounded-circle mx-1 my-1"
                        width="26px"
                        height="26px"
                        alt="avatar"
                    />
                    <span className="fw-bold">{tweet.userName} </span>
                    <FontAwesomeIcon
                        icon="fa-solid fa-circle-check"
                        className="text-primary"
                    />
                    <span className="text-secondary">
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
