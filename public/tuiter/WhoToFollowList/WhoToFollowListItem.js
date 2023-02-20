const WhoToFollowListItem = (who) => {
    return `   
        <li class="list-group-item no-border mt-2">
            <div class="row align-items-center">
                <div class="col-2">
                    <img src="${who.avatarIcon}" width="50px" height="50px"
                        class="rounded-circle">
                </div>
                <div class="col-6">
                    <span class="fw-semibold">${who.userName}</span>
                    <i class="fas fa-circle-check blue"></i>

                    <div class="text-muted">@${who.handle}</div>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    `;
};

export default WhoToFollowListItem;
