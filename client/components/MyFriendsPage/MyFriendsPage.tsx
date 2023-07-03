import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from 'react-query'
import { getAllFriendsById } from '../../apis/friends'
import MyFriends from '../MyFriends/MyFriends'

function MyFriendsPage() {
  const { getAccessTokenSilently } = useAuth0()
  const { isLoading, data } = useQuery('getAllFriendsById', async () => {
    const token = await getAccessTokenSilently()
    return await getAllFriendsById(token)
  })

  return <>{!isLoading && data && <MyFriends friends={data} />}</>
}
export default MyFriendsPage
