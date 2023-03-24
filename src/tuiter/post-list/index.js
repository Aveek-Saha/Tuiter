import PostListItem from "./post-list-item";
import posts from './posts.json'

const PostList = () => {
    return(
        <div className="list-group">
            {
                posts.map(post => {
                    return(<PostListItem key={post._id} post={post}/>)
                })
            }
        </div>
    )
}

export default PostList;