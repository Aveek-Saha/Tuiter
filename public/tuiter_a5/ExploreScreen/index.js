import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    let active = "Explore";
    $("#wd-explore").append(`
        <div class="row">
            ${NavigationSidebar(active)}
            ${ExploreComponent()}
            ${WhoToFollowList()}
        </div>
    `);
}

$(exploreComponent);
