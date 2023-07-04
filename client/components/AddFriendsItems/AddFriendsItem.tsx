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
      <div className="flex flex-col items-center mt-20 gap-4">
        <h2 className="font-sans font-bold text-2xl text-slate-50 pb-4 text-left">
          Add a friend!
        </h2>
        <div className="flex flex-col">
          <div className="flex">
            <ul className="list-disc">
              {friends.map((friend) => {
                return (
                  <li
                    key={friend.friendUserId}
                    className="pt-4 pb-4 text-1xl text-slate-50 bg-slate-950 bg-opacity-25 rounded-l-lg flex items-center justify-between w-80 mb-4"
                  >
                    <div className="flex-grow text-left ml-2">
                      {friend.username}
                    </div>
                    <div className="flex items-end">
                      <button
                        className="fa-solid fa-plus flex flex-initial pr-3"
                        onClick={() => handleClick(friend.friendUserId)}
                      ></button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddFriendsItem
