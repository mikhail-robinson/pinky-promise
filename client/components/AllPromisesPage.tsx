import { useAuth0 } from '@auth0/auth0-react'
import AllPromisesItem from './AllPromisesItem'
import { useQuery } from 'react-query'
import { getPromisesbyUserId } from '../apis/promises'

function AllPromisesPage() {
  const { getAccessTokenSilently } = useAuth0()
  const { isLoading, data } = useQuery('getPromisesbyUserId', async () => {
    const token = await getAccessTokenSilently()
    return await getPromisesbyUserId(token)
  })

  return <div>{!isLoading && data && <AllPromisesItem promises={data} />}</div>
}

export default AllPromisesPage
