import { PledgeDraft, Pledge } from '../../../models/pledge_models'
import AddPromiseForm from './AddPromiseForm'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { addPromise } from '../../apis/promises'

function AddPromisePage() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  const mutation = useMutation({
    mutationFn: ({
      form,
      token,
    }: {
      form: PledgeDraft | Pledge
      token: string
    }) => addPromise(form, token),
    onSuccess: () => {
      navigate('/my-promises')
    },
  })

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleSubmit(form: PledgeDraft | Pledge) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })

    navigate('/my-promises')
  }

  return (
    <div>
      <AddPromiseForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default AddPromisePage
