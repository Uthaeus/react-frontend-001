
function PostUserItem({ user }) {
    console.log('user:', user)
  return (
    <div>
      <h2>{user.username}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default PostUserItem;