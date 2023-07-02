import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from 'react-query'
import { addFriend, getAllFriendsById } from '../../apis/friends'
import AddFriendsItem from '../AddFriendsItems/AddFriendsItem'

function AddFriendsPage() {
  const { getAccessTokenSilently } = useAuth0()
  const { isLoading, data } = useQuery('addFriends', async () => {
    const token = await getAccessTokenSilently()
    return await getAllFriendsById(token)
  })

  return <div>{!isLoading && data && <AddFriendsItem friends={data} />}</div>
}

export default AddFriendsPage
