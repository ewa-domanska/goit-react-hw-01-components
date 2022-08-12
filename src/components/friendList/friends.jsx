import styles from './friends.module.css'

export const FriendList = ({friends}) => {
  let friendsHTMLArray = []

  friends.forEach(function (friend) {
    friendsHTMLArray.push(<FriendListItem
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}/>)
  })

  return (
    <ul className={styles.friendList}>
      {friendsHTMLArray}
    </ul>
  );
}

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={styles.item}>
      {
        (isOnline)
          ? <span className={styles.present}></span>
          : <span className={styles.absent}></span>
      }
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48"/>
      <p className={styles.name}>{name}</p>
    </li>
  )
}
