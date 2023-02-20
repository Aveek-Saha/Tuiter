import SidebarItem from "./SidebarItems.js";
import items from "./items.js";

const NavigationSidebar = (active) => {
    return `
    <div class="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action no-border disabled">
                <i class="d-inline fab fa-t blue fa-xl"></i>
            </a>
            
            ${items
                .map((item) => {
                    return `${SidebarItem(item, active === item.name ? "active" : "")}`;
                })
                .join("")}
        </div>
        <a class="btn btn-primary rounded-pill mt-2 w-100" href="#" role="button">Tuit</a>
    </div>
    `;
};
export default NavigationSidebar;
