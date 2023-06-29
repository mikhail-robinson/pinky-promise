import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import RegisterButton from './RegisterButton'
import UserProfilePage from './UserProfilePage'

function App() {
  const { isAuthenticated } = useAuth0()

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
