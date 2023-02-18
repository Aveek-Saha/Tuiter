import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js"
import PostList from "../PostList/index.js";

function exploreComponent() {
    let active = "Home";
    $("#wd-home").append(`
        <div class="row">
            ${NavigationSidebar(active)}
            ${PostList()}
            <div class="col">
                <ul class="list-group">
                    ${PostSummaryList()}
                </ul>
            </div>
        </div>
    `);
}

$(exploreComponent);
