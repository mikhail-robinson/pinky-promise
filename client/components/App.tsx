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
      <div
        className="w-screen h-screen
       bg-space bg-no-repeat bg-center"
      >
        <div className="app">
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-primary text-pink text-center text-5xl drop-shadow my-custom">
              Pinky
            </h1>
            <h1 className="font-primary text-pink text-center text-5xl drop-shadow">
              Promise
            </h1>
          </div>

          {isAuthenticated ? (
            <>
              <LogoutButton/>
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
      </div>
    </>
  )
}

export default App
