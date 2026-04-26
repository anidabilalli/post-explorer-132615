function PostCard({post}) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>ID:{post.id}</p>
            <p>User ID:{post.user.ID}</p>
            <p>{post.body}</p>
        </div>
    )
}
export default PostCard;