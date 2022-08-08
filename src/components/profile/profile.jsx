import styles from './profile.module.css'

export const Profile = ({user}) => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profile}>
        <div className="description">
          <div className={styles.avatarWrapper}>
            <img
              src={user.avatar}
              alt="User avatar"
              className={styles.avatar}
            />
          </div>
          <p className={styles.name}>{user.username}</p>
          <p className={styles.tag}> @{user.tag}</p>
          <p className={styles.location}>{user.location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.stat}>
            <span className="label">Followers</span>
            <span className={styles.quantity}>{user.stats.followers}</span>
          </li>
          <li className={styles.stat}>
            <span className="label">Views</span>
            <span className={styles.quantity}>{user.stats.views}</span>
          </li>
          <li className={styles.stat}>
            <span className="label">Likes</span>
            <span className={styles.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
