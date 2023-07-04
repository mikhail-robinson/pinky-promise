import { useMutation, useQuery } from 'react-query'
import { PledgeStatusUpdate } from '../../../models/pledge_models'
import { getPromiseByPromiseId, resolvePromise } from '../../apis/promises'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Promise from '../Promise/Promise'
import PromiseBroken from './PromiseBrokenAnimation'
import { useAnimation } from 'framer-motion'
import PromiseKept from './PromiseKeptAnimation'

function PromiseDetailPage() {
  const params = useParams()
  const navigate = useNavigate()
  const kept = useAnimation()
  const broken = useAnimation()
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
  })

  function handleBroken() {
    broken.start({
      scale: [1, 1.5, 1],
      // transition: { duration: 0.5 },
      // opacity: 1,
      // x: 100,
      transition: { ease: 'easeOut', duration: 2 },
    })
    setTimeout(() => {
      navigate(`/my-promises`)
    }, 1500)
  }

  function handleKept() {
    kept.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.5 },
    })
    setTimeout(() => {
      navigate(`/my-promises`)
    }, 1800)
  }

  async function handleResolvePromise(status: string) {
    const token = await getAccessTokenSilently()
    const promiseId = promiseQuery.data?.promiseId as number
    const promiseUpdate = { promiseId, status }

    mutation.mutate({ promiseUpdate, token })
    if (status === 'broken') {
      handleBroken()
    } else {
      handleKept()
    }
  }

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  console.log(promiseQuery.data?.status)

  return (
    <div>
      {!promiseQuery.isLoading && promiseQuery.data && (
        <Promise
          promise={promiseQuery.data}
          handleResolvePromise={handleResolvePromise}
        />
      )}
      <PromiseBroken broken={broken} />
      <PromiseKept kept={kept} />
    </div>
  )
}

export default PromiseDetailPage
