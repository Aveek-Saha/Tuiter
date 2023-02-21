const SidebarItem = (item, active) => {
    return `
        <a href="${item.link}" class="list-group-item list-group-item-action no-border ${active}">
            <i class="d-inline ${item.icon}"></i>
            <span class="d-none d-xl-inline">${item.name}</span>
        </a>
`;
};

export default SidebarItem;
