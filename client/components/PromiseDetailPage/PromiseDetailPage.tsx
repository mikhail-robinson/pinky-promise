import { useMutation, useQuery } from 'react-query'
import { PledgeStatusUpdate } from '../../../models/pledge_models'
import { getPromiseByPromiseId, resolvePromise } from '../../apis/promises'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Promise from '../Promise/Promise'

function PromiseDetailPage() {
  const params = useParams()
  const navigate = useNavigate()

  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()
  const promiseQuery = useQuery('getPromise', async () => {
    const token = await getAccessTokenSilently()
    return await getPromiseByPromiseId(Number(params.promiseId), token)
  })
  const mutation = useMutation({
    mutationFn: ({
      promiseUpdate,
      token,
    }: {
      promiseUpdate: PledgeStatusUpdate
      token: string
    }) => resolvePromise(promiseUpdate, token),
    onSuccess: () => {
      navigate('/my-promises')
    },
  })

  async function handleResolvePromise(status: string) {
    const token = await getAccessTokenSilently()
    const promiseId = promiseQuery.data?.promiseId as number
    const promiseUpdate = { promiseId, status }

    mutation.mutate({ promiseUpdate, token })
  }

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  return (
    <div className="flex mt-20 mx-4">
      <div className="flex flex-grow justify-center bg-slate-950 bg-opacity-50 rounded-lg h-102">
        {!promiseQuery.isLoading && promiseQuery.data && (
          <Promise
            promise={promiseQuery.data}
            handleResolvePromise={handleResolvePromise}
          />
        )}
      </div>
    </div>
  )
}

export default PromiseDetailPage
