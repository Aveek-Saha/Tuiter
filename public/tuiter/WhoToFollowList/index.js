import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return `
    <div class="d-none d-lg-block col">
        <ul class="list-group bg-grey no-border">
            <li class="list-group-item no-border wd-title">
                <h5 class="fw-bold">Who to follow</h5>
            </li>
        </ul>
        ${who
            .map((item) => {
                return `${WhoToFollowListItem(item)}`;
            })
            .join("")}
    </div>
`;
};

export default WhoToFollowList;