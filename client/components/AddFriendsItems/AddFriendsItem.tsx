import { FriendNames } from '../../../models/friends_models'

interface Props {
  friends: FriendNames[]
}

function AddFriendsItem(props: Props) {
  const { friends } = props

  return (
    <>
      <h2>Add a friend!</h2>
      {friends.map((friend) => {
        return (
          <li key={friend.friendUserId}>
            <div>{friend.friendName}</div>
            {/* <button onClick={() => }>
        
      </button> */}
          </li>
        )
      })}
    </>
  )
}

export default AddFriendsItem
