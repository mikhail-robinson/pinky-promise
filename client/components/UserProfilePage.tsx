import { FormEvent, useState } from 'react'
import { UserDraft, User } from '../../models/user_models'
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
    mutationFn: ({ form, token }: { form: UserDraft | User; token: string }) =>
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

  async function handleSubmit(form: UserDraft | User) {
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
