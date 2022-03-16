const User = ({ user }) => {
  return (
    <div className="user">
      <div>
        <a href={user.html_url} target="_blank" rel="noreferrer noopener">
          <img className="avatar" src={user.avatar_url} alt={user.name} />
        </a >
      </div>
      <a href={user.html_url} target="_blank" rel="noreferrer noopener">
        <h1 className="name">
          {user.name || user.login}
        </h1>
        <span className="handle">{user.name && <span>(@{user.login})</span>}</span>
      </a >
    </div >
  )
}

export default User;