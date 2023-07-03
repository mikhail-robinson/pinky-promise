import { useMutation, useQueryClient } from 'react-query'
import { FriendNames } from '../../../models/friends_models'
import { addFriend } from '../../apis/friends'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  friends: FriendNames[]
}

function AddFriendsItem(props: Props) {
  const { friends } = props
  const { getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const addFriendMutation = useMutation(
    async (friendUserId: string) => {
      const token = await getAccessTokenSilently()
      await addFriend(friendUserId, token)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getNotFriends')
      },
      onError: (error) => {
        console.log('Error adding friend:', error)
      },
    }
  )

  const handleClick = (friendUserId: string) => {
    addFriendMutation.mutate(friendUserId)
  }

  return (
    <>
      <h2>Add a friend!</h2>
      {friends.map((friend) => {
        return (
          <li key={friend.friendUserId}>
            <div>{friend.username}</div>
            <button
              className="fa-solid fa-plus"
              onClick={() => handleClick(friend.friendUserId)}
            ></button>
          </li>
        )
      })}
    </>
  )
}

export default AddFriendsItem
