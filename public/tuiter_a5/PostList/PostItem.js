const PostItem = (post) => {
    return `
    <li class="list-group-item posts">
        <div class="row">
            <div class="col-2">
                <img src="${post.profileImage}" class="rounded-circle"
                width="60px" height="60px">
            </div>

            <div class="col">
                <div class="row">
                    <div class="col">
                        <span class="fw-semibold">${post.userName}</span>
                        <i class="fas fa-circle-check blue"></i>
                        
                        <span class="text-muted"> @${post.userTag} • ${post.time}</span>
                    </div>
                </div>

                <p class="mt-2">${post.text}</p>

                <div class="row pe-3">
                    <div class="card link-card border-secondary m-0 p-0">
                        <img src="${post.link.img}" class="card-img-top w-100">
                        ${post.link.heading ? `
                        <div class="card-body">
                            <p class="card-title">${post.link.heading}</p>
                            <p class="card-text text-secondary">${post.link.text}</p>
                            <span class="card-text text-secondary"><i class="fa-solid fa-link"></i> ${post.link.link}</span>
                        </div>` : ''}
                    </div>
                </div>

                <div class="row justify-content-around mt-3 mb-2 reaction">
                    <a class="col text-secondary" href="#">
                        <i class="fa-regular fa-comment"></i> ${post.comments}
                    </a>
                    <a class="col text-secondary" href="#">
                        <i class="fa-solid fa-retweet"></i> ${post.retweets}
                    </a>
                    <a class="col text-secondary" href="#">
                        <i class="fa-regular fa-heart"></i> ${post.likes}
                    </a>
                    <a class="col text-secondary" href="#">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </a>
                </div>

            </div>
        </div>
    </li>
    `;
};

export default PostItem;
