import {
  PledgeDraftSchemaFrontEnd,
  PledgeDraft,
} from '../../../models/pledge_models'
import AddPromiseForm from './AddPromiseForm'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { addPromise } from '../../apis/promises'
import AnimationComponent from './PromiseMadeAnimation'
import { useAnimation } from 'framer-motion'

function AddPromisePage() {
  const navigate = useNavigate()
  const controls = useAnimation()
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  const mutation = useMutation({
    mutationFn: ({
      form,
      token,
    }: {
      form: PledgeDraftSchemaFrontEnd | PledgeDraft
      token: string
    }) => addPromise(form, token),
    onSuccess: () => {
      handleAnimation()
    },
  })

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleAnimation() {
    await controls.start({
      scale: [1, 1.5, 1],
      rotate: 360,
      transition: { duration: 0.5 },
    })
    setTimeout(() => {
      navigate('/my-promises')
    }, 1000)
  }

  async function handleSubmit(form: PledgeDraftSchemaFrontEnd | PledgeDraft) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
  }

  return (
    <div className="relative ">
      <AddPromiseForm
        handleSubmit={handleSubmit}
      />
      <AnimationComponent controls={controls} />
    </div>
  )
}

export default AddPromisePage
