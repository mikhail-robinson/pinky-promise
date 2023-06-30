import { useQuery } from 'react-query'
import Pledge from '../Promise/Promise'
import { getPromiseById } from '../../apis/promises'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function PromiseDetailPage() {
  const params = useParams()
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()
  const promiseQuery = useQuery('getPromise', async () => {
    const token = await getAccessTokenSilently()
    return await getPromiseById(Number(params.promiseId), token)
  })

  function handleBrokenPromise(){
    return
  }

  function handleKeptPromise() {
    return
  }

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  return (
    <div>{promiseQuery.data && <Pledge promise={promiseQuery.data} handleBrokenPromise={handleBrokenPromise} handleKeptPromise={handleKeptPromise} />}</div>
  )
}

export default PromiseDetailPage
