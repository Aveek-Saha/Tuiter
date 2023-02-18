import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return `
        <div class="col-6">
            <div class="row">
                <ul class="list-group">
                ${posts
                    .map((item) => {
                        return `${PostItem(item)}`;
                    })
                    .join("")}
                </ul>
            </div>
        </div>
`;
};

export default PostList;
