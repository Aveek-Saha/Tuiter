const PostSummaryItem = (post) => {
    return `
    <li class="list-group-item">
        <div class="row">
            <div class="col-9">
                <div class="text-muted">${post.topic}</div>
                <div><span class="">${post.userName}</span>
                    ${post.userName ? '<i class="fas fa-circle-check blue"></i> -' : ''}
                    
                    <span class="text-muted"> ${post.time}</span>
                </div>
                <div class="">
                    ${post.title}
                </div>
                <div class="text-muted">${post.tweets ? post.tweets + ' Tweets' : ''}</div>
            </div>
            <div class="col-3">
                <img src="${post.image}" class="rounded float-end wd-post-img"
                    width="80px">
            </div>
        </div>
    </li>
    `;
};

export default PostSummaryItem;