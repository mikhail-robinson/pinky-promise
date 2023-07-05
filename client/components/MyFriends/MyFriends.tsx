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
    <div className="mt-20">
      <div className="flex mb-8 mx-auto relative">
        <h2 className="font-sans font-bold text-2xl text-slate-50  text-left ml-8 mr-8">
          Friends List
        </h2>
        <div className="font-body text-purple flex items-end bg-pink text-xl hover:bg-darkPink drop-shadow-xl py-1 px-3 p-1 rounded-lg">
          <button onClick={() => redirect()}>Make A Friend!</button>
        </div>
      </div>
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
