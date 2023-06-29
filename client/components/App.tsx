import { useMutation, useQuery, useQueryClient } from 'react-query'
import LoginButton from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'
import { useNavigate } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import { getFruits } from '../apis/fruits'
import UserProfilePage from './UserProfilePage'

function App() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const {
    user,
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
    isAuthenticated,
  } = useAuth0()
  // fruitsQuery contains data and isLoading for a pending promise
  const fruitsQuery = useQuery(['getFruit'], async () => {
    return await getFruits()
  })

  //example for mutation which is the useDispatch replacement.
  // mutation is a function that takes information to POST.
  // const mutation = useMutation({
  //   addNewFruit: ({ form, token }: { form: FruitDraft; token: string }) =>
  //     addFruit(form, token),
  //   onSuccess: () => {
  //     //tells the getFruit query to update
  //     queryClient.invalidateQueries('getFruit')
  //     afterwards can navigate to another page
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
        <h1>Fullstack Boilerplate - with Fruits!</h1>

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
        <ul>
          {!fruitsQuery.isLoading &&
            fruitsQuery.data &&
            fruitsQuery.data.map((fruit) => <li key={fruit}>{fruit}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
