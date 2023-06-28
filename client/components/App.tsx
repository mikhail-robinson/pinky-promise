import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchFruits } from '../slices/fruits'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      onClick={() => {
        loginWithRedirect()
      }}
    >
      Login
    </button>
  )
}

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      onClick={() => {
        loginWithRedirect({
          authorizationParams: {
            screen_hint: 'signin',
            // redirect_uri: '/',
          },
        })
      }}
    >
      Register
    </button>
  )
}

function LogoutButton() {
  const { logout } = useAuth0()
  return (
    <button
      onClick={() => {
        logout()
      }}
    >
      Logout
    </button>
  )
}

function App() {
  const {
    user,
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
    isAuthenticated,
  } = useAuth0()
  const fruits = useAppSelector((state) => state.fruits)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [dispatch])

  async function handleAccessToken() {
    const token = await getAccessTokenSilently()
    console.log(token)
  }

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <button onClick={handleAccessToken}>Show Access token</button>
        {isAuthenticated ? (
          <>
            <LogoutButton />
          </>
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
