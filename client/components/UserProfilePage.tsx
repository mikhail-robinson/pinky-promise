import { FormEvent, useState } from 'react'
import { user_draft, user } from '../../models/user_models'
import UserProfileForm from './UserProfileForm'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import useFetchUser from '../hooks/useFetchProfile'
import { insertProfile } from '../apis/user'

function UserProfilePage() {
  // const navigate = useNavigate()
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  const userQuery = useFetchUser()
  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: user_draft | user; token: string }) =>
      insertProfile(form, token),
    onSuccess: () => {
      // navigate('/home')
    },
  })

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  // const [userData, setUserData] = useState({
  //   name: '',
  //   username: '',
  //   bio: '',
  // } as user_draft)

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setUserData({
  //     ...userData,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  async function handleSubmit(form: user_draft | user) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
    // navigate('/home')
  }

  return (
    <div>
      <UserProfileForm handleSubmit={handleSubmit} profile={userQuery.data} />
    </div>
  )
}

export default UserProfilePage
