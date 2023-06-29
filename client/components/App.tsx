import { useMutation, useQuery, useQueryClient } from 'react-query'
import LoginButton from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'
import { useNavigate } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import { Pledge } from '../../models/promise_models'
import { useState } from 'react'

function App() {
  const [form, setForm] = useState()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const {
    user,
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
    isAuthenticated,
  } = useAuth0()
  // promisesQuery.data contains data and promisesQuery.isLoading is a boolean for a pending promise waiting to be fulfilled
  // const promisesQuery = useQuery(['getPromises'], async () => {
  //   return await getPromises() as promise[]
  // })

  // // example for mutation which is the useDispatch replacement.
  // // mutation is a function that takes information to POST.
  // const mutation = useMutation({
  //   addNewPromise: ({ form: PromiseDraft; token: string }) =>
  //     addPromise(form, token),
  //   onSuccess: () => {
  //     //tells the getPromise query to update
  //     queryClient.invalidateQueries('getPromise')
  //     // afterwards can navigate to another page
  //     navigate('/')
  //   },
  // })

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault()
  //   const token = await getAccessTokenSilently()
  //   mutation.mutate(form, token)
  // }

  return (
    <>
      <div className="app">
        <h1>Pinky Promise!</h1>

        {isAuthenticated ? (
          <>
            <LogoutButton />
            <UserProfilePage />
          </>
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
        <ul></ul>
      </div>
    </>
  )
}

export default App
