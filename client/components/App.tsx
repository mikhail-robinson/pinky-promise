import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchFruits } from '../slices/fruits'
import LoginButton from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'
import RegisterButton from './RegisterButton'

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

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>

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
