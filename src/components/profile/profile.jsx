export const Profile = ({user}) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src= {user.avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{user.username}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{user.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{user.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{user.likes}</span>
        </li>
      </ul>
    </div>
  );
};
