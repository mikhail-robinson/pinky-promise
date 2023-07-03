import { useNavigate } from 'react-router-dom'
import { FriendNames } from '../../../models/friends_models'
import FriendListItem from '../FriendListItem/FriendListItem'

interface Props {
  friends: FriendNames[]
}

function MyFriends(props: Props) {
  const navigate = useNavigate()

  function redirect() {
    navigate('/add-friends')
  }

  return (
    <div>
      <br /><br /><br /><br />
      <h2>Friends List</h2>
      <button onClick={() => redirect()}>Make A Friend!</button>
      <ul>
        {props.friends.map((friend) => (
          <FriendListItem
            key={friend.username + friend.friendName}
            friend={friend}
          />
        ))}
      </ul>
    </div>
  )
}
export default MyFriends
