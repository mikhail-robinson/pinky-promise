import { FormEvent, useState } from 'react'
import { UserDraft, User } from '../../models/user_models'
import UserProfileForm from './UserProfileForm'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import useFetchUser from '../hooks/useFetchProfile'
import { insertProfile, updateProfile } from '../apis/user'

function UserProfilePage() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()
  const userQuery = useFetchUser()

  const mutation = useMutation(
    ({
      form,
      token,
      mutationFn,
    }: {
      form: UserDraft | User
      token: string
      mutationFn: typeof insertProfile | typeof updateProfile
    }) => mutationFn(form, token),
    {
      onSuccess: () => {
        navigate('/my-promises')
      },
    }
  )

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleSubmit(form: UserDraft | User) {
    const token = await getAccessTokenSilently()
    const mutationFn = userQuery.data ? updateProfile : insertProfile
    mutation.mutate({ form, token, mutationFn })
  }

  return (
    <div>
      <h1 className="font-secondary text-slate-50 text-2xl font-medium pb-4 pt-7">
        {userQuery.data ? 'Your Profile' : 'Introduce Yourself'}
      </h1>
      <UserProfileForm handleSubmit={handleSubmit} profile={userQuery.data} />
    </div>
  )
}

export default UserProfilePage
