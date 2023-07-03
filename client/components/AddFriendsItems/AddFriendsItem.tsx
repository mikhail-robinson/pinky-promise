import { FriendNames } from '../../../models/friends_models'
import { addFriend } from '../../apis/friends'
import { useAuth0 } from '@auth0/auth0-react'
interface Props {
  friends: FriendNames[]
}

function AddFriendsItem(props: Props) {
  const { friends } = props

  const { getAccessTokenSilently } = useAuth0()

  async function handleClick(friendUserId: string) {
    const token = await getAccessTokenSilently()

    await addFriend(friendUserId, token)
  }

  return (
    <>
      <h2>Add a friend!</h2>
      {friends.map((friend) => {
        return (
          <li key={friend.friendUserId}>
            <div>{friend.friendName}</div>
            <button onClick={() => handleClick(friend.friendUserId)}>
              Add Friend
            </button>
          </li>
        )
      })}
    </>
  )
}

export default AddFriendsItem
